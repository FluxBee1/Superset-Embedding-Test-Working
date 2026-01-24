// // // import { useEffect, useRef } from 'react';
// // // import { embedDashboard } from '@superset-ui/embedded-sdk';

// // // function App() {
// // //   const containerRef = useRef(null);

// // //   useEffect(() => {
// // //     embedDashboard({
// // //       id: '4ce77a47-a791-4c3d-aeff-ff7e9450aea2',
// // //       supersetDomain: 'http://localhost:8088',
// // //       mountPoint: containerRef.current,
// // //       fetchGuestToken: async () => {
// // //         return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwicmVzb3VyY2VzIjpbeyJ0eXBlIjoiZGFzaGJvYXJkIiwiaWQiOiI0Y2U3N2E0Ny1hNzkxLTRjM2QtYWVmZi1mZjdlOTQ1MGFlYTIifV0sInJsc19ydWxlcyI6W10sImlhdCI6MTc2OTAwODgwOS4zMjExNTUzLCJleHAiOjE3NjkwMDkxMDkuMzIxMTU1MywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.JtSZT5UXphiZO-QmrKaH94poaXiWsrEaGiLBeyJpAkU';
// // //       },
// // //       dashboardUiConfig: {
// // //         hideTitle: false,
// // //         hideChartControls: false,
// // //       },
// // //       debug: true,
// // //     });
// // //   }, []);

// // //   return (
// // //     <div
// // //       ref={containerRef}
// // //       style={{ width: '100%', height: '100vh' }}
// // //     />
// // //   );
// // // }

// // // export default App


// // // import { embedDashboard } from '@superset-ui/embedded-sdk';

// // // const guestToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwicmVzb3VyY2VzIjpbeyJ0eXBlIjoiZGFzaGJvYXJkIiwiaWQiOiI0Y2U3N2E0Ny1hNzkxLTRjM2QtYWVmZi1mZjdlOTQ1MGFlYTIifV0sInJsc19ydWxlcyI6W10sImlhdCI6MTc2OTAwODgwOS4zMjExNTUzLCJleHAiOjE3NjkwMDkxMDkuMzIxMTU1MywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.JtSZT5UXphiZO-QmrKaH94poaXiWsrEaGiLBeyJpAkU';

// // // function App() {
// // //   // Run after DOM loads
// // //   window.addEventListener('DOMContentLoaded', () => {
// // //     const container = document.getElementById('dashboard-container');
// // //     if (!container) return;

// // //     embedDashboard({
// // //       id: '3ccb3dfb-e972-419f-9d2b-96ac1c48e633',
// // //       supersetDomain: 'http://localhost:8088',
// // //       mountPoint: container,
// // //       fetchGuestToken: async () => guestToken,
// // //       dashboardUiConfig: {
// // //         hideTitle: false,
// // //         hideChartControls: false,
// // //       },
// // //       debug: true,
// // //     });
// // //   });

// // //   return <div id="dashboard-container" style={{ width: '100%', height: '100vh' }} />;
// // // }

// // // export default App;
// // // import { embedDashboard } from '@superset-ui/embedded-sdk';

// // //  const guestToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwicmVzb3VyY2VzIjpbeyJ0eXBlIjoiZGFzaGJvYXJkIiwiaWQiOiI0Y2U3N2E0Ny1hNzkxLTRjM2QtYWVmZi1mZjdlOTQ1MGFlYTIifV0sInJsc19ydWxlcyI6W10sImlhdCI6MTc2OTAwODgwOS4zMjExNTUzLCJleHAiOjE3NjkwMDkxMDkuMzIxMTU1MywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.JtSZT5UXphiZO-QmrKaH94poaXiWsrEaGiLBeyJpAkU';

// // // function App() {
// // //   window.addEventListener('DOMContentLoaded', () => {
// // //     const container = document.getElementById('dashboard-container');
// // //     if (!container) return;

// // //     embedDashboard({
// // //       id: '4ce77a47-a791-4c3d-aeff-ff7e9450aea2',
// // //       supersetDomain: 'http://localhost:8088',
// // //       mountPoint: container,
// // //       fetchGuestToken: async () => guestToken,
// // //       dashboardUiConfig: {
// // //         hideTitle: false,
// // //         hideChartControls: false,
// // //       },
// // //       debug: true,
// // //     });
// // //   });

// // //   return <div id="dashboard-container"></div>;
// // // }

// // // export default App;


// // import { embedDashboard } from '@superset-ui/embedded-sdk';

// // const guestToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4ifSwicmVzb3VyY2VzIjpbeyJ0eXBlIjoiZGFzaGJvYXJkIiwiaWQiOiI0Y2U3N2E0Ny1hNzkxLTRjM2QtYWVmZi1mZjdlOTQ1MGFlYTIifV0sInJsc19ydWxlcyI6W10sImlhdCI6MTc2OTAwODgwOS4zMjExNTUzLCJleHAiOjE3NjkwMDkxMDkuMzIxMTU1MywiYXVkIjoiaHR0cDovLzAuMC4wLjA6ODA4MC8iLCJ0eXBlIjoiZ3Vlc3QifQ.JtSZT5UXphiZO-QmrKaH94poaXiWsrEaGiLBeyJpAkU';

// // function App() {
// //   window.addEventListener('DOMContentLoaded', () => {
// //     const container = document.getElementById('dashboard-container');
// //     if (!container) return;

// //     embedDashboard({
// //       id: '4ce77a47-a791-4c3d-aeff-ff7e9450aea2',
// //       supersetDomain: 'http://localhost:8088',
// //       mountPoint: container,
// //       fetchGuestToken: async () => guestToken,
// //       dashboardUiConfig: {
// //         hideTitle: false,
// //         hideChartControls: false,
// //       },
// //       debug: true,  // logs internal embed info
// //       onLoad: (data) => {
// //         console.log('Dashboard loaded successfully!', data);
// //       },
// //       onError: (error) => {
// //         console.error('Error loading dashboard:', error);
// //       },
// //     });
// //   });

// //   return (
// //     <div
// //       id="dashboard-container"
// //       style={{
// //         width: '100%',
// //         height: '100%',          // full viewport height
// //         minHeight: '500px',       // ensure container is visible
// //         border: '1px solid #ddd', // optional, just to see the container
// //       }}
// //     ></div>
// //   );
// // }

// // export default App;



// // App.tsx (or App.jsx)
// import SupersetEmbed from "./SupersetEmbed";

// export default function App() {
//   return (
//     <div style={{ padding: 16 }}>
//       <h2>Analytics</h2>
//       <SupersetEmbed
//         supersetDomain="https://localhost:8088"
//         dashboardId="99db18b6-80a1-4506-bec4-34cae2b454a6"
//         tokenUrl="http://localhost:4000/api/superset/guest-token"   
//       />
//     </div>
//   );
// }



import { useEffect } from "react"
import { embedDashboard } from "@superset-ui/embedded-sdk"
// import "./App.css"

function App() {
  const getToken = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/superset/guest-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dashboardId: "120d8aa4-d806-4642-b6b1-f5978f9ef86a"
        }),
        // If you still get CORS errors, remove or comment out this line:
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch token: ${response.status}`)
      }

      const data = await response.json()
      console.log(data.token)
      return data.token // Return just the token string
    } catch (error) {
      console.error("Error fetching token:", error)
      throw error
    }
  }

  useEffect(() => {
    const embed = async () => {
      await embedDashboard({
        id: "120d8aa4-d806-4642-b6b1-f5978f9ef86a", // given by the Superset embedding UI
        supersetDomain: "http://localhost:8088",
        mountPoint: document.getElementById("dashboard"), // html element in which iframe render
        fetchGuestToken: () => getToken(), // Pass the function reference
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          hideTab: true,
        },
      })
    }
   


    if (document.getElementById("dashboard")) {
      embed()
    }
    var iframe = document.querySelector("iframe")
    if (iframe) {
      iframe.style.width = '100vw'; // Set the width as needed
      iframe.style.minHeight = '100vw'; // Set the height as needed
    }
  }, [])

  return (
    <div id="dashboard"></div>
  )
}

export default App