
// // server.js
// import express from "express";
// import fetch from "node-fetch";
// import dotenv from "dotenv";
// dotenv.config();

// const app = express();
// const cors = require("cors");
// app.use(express.json());
// app.use(
//     cors({
//         origin: "*",
//         credentials: true,
//     })
// );

// // Superset endpoints
// const SUPERSET_URL = process.env.SUPERSET_URL; // e.g. https://superset.example.com
// const LOGIN_URL = `${SUPERSET_URL}/api/v1/security/login`;
// const GUEST_TOKEN_URL = `${SUPERSET_URL}/api/v1/security/guest_token`;

// // A service user with permission "can_grant_guest_token"
// const SS_USERNAME = process.env.SS_USERNAME;
// const SS_PASSWORD = process.env.SS_PASSWORD;

// console.log(SS_PASSWORD,SUPERSET_URL,SS_USERNAME,LOGIN_URL,GUEST_TOKEN_URL);
// async function getAccessToken() {
//   const res = await fetch(LOGIN_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       provider: "db",
//       username: SS_USERNAME,
//       password: SS_PASSWORD,
//       refresh: true,
//     }),
//   });
//   if (!res.ok) throw new Error(`Login failed: ${res.status} ${await res.text()}`);
//   const data = await res.json();
//   return data.access_token;
// }

// app.post("/api/superset/guest-token", async (req, res) => {
//   try {
//     console.log("Attempting to get guest token...");
//     const { dashboardId, rls } = req.body; // dashboardId: embedded UUID; rls: optional row-level security rules
//     const accessToken = await getAccessToken();

//     const gtRes = await fetch(GUEST_TOKEN_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         resources: [{ type: "dashboard", id: dashboardId }],
//         rls: rls || [],
//         user: {
//           username: "report-viewer",
//           first_name: "Report",
//           last_name: "Viewer",
//         },
//       }),
//     });

//     if (!gtRes.ok) throw new Error(`guest_token failed: ${gtRes.status} ${await gtRes.text()}`);
//     const { token } = await gtRes.json();
//     res.json({ token });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Failed to get guest token" });
//   }
// });
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });
// app.listen(4000, () => console.log("Token broker on http://localhost:4000"));


// server.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors"; // Changed from require() to import

dotenv.config();

const app = express();

app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173", // Your React dev server
  "http://localhost:3000", // Alternative React port
  // Add production URLs here when deployed
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Superset endpoints
const SUPERSET_URL = process.env.SUPERSET_URL; // e.g. https://superset.example.com
const LOGIN_URL = `${SUPERSET_URL}/api/v1/security/login`;
const GUEST_TOKEN_URL = `${SUPERSET_URL}/api/v1/security/guest_token`;

// A service user with permission "can_grant_guest_token"
const SS_USERNAME = process.env.SS_USERNAME;
const SS_PASSWORD = process.env.SS_PASSWORD;
const SS_FIRST_NAME = process.env.SS_FIRST_NAME;
const SS_LAST_NAME = process.env.SS_LAST_NAME;

console.log(SS_PASSWORD, SUPERSET_URL, SS_USERNAME, LOGIN_URL, GUEST_TOKEN_URL);

async function getAccessToken() {
  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      provider: "db",
      username: SS_USERNAME,
      password: SS_PASSWORD,
      refresh: true,
    }),
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.access_token;
}

app.post("/api/superset/guest-token", async (req, res) => {
  try {
    console.log("Attempting to get guest token...");
    const { dashboardId, rls } = req.body; // dashboardId: embedded UUID; rls: optional row-level security rules
    const accessToken = await getAccessToken();
    console.log(dashboardId)

    const gtRes = await fetch(GUEST_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        resources: [{ type: "dashboard", id: dashboardId }],
        rls: rls || [],
        user: {
          username: SS_USERNAME,
          first_name: SS_FIRST_NAME,
          last_name: SS_LAST_NAME,
        },
      }),
    });

    if (!gtRes.ok) throw new Error(`guest_token failed: ${gtRes.status} ${await gtRes.text()}`);
    const { token } = await gtRes.json();
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to get guest token" });
  }
});

app.get("/api/superset/dataset", async (optional, res) => {
  try {
    const accessToken = await getAccessToken();
    const gtRes = await fetch(`${SUPERSET_URL}/api/v1/dataset`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!gtRes.ok) {
      throw new Error(
        `Dataset fetch failed: ${gtRes.status} ${await gtRes.text()}`
      );
    }

    const data = await gtRes.json();
    const mapped = data.result.map(({ id, table_name, description }) => ({
      id,
      table_name,
      description,
    }));
    res.json(mapped);
    console.log(data.ids);

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to get dataset" });
  }
});


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(4000, () => console.log("Token broker on http://localhost:4000"));
