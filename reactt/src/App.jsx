import { useEffect } from "react"
import { embedDashboard } from "@superset-ui/embedded-sdk"
// import "./App.css"
import DatasetSelectForm from "./widgetForm.jsx"
function App() {
  const getToken = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/superset/guest-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dashboardId: "919eb7b2-7817-4706-937f-6b31dceed627"
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
        id: "919eb7b2-7817-4706-937f-6b31dceed627", // given by the Superset embedding UI
        supersetDomain: "http://localhost:8088",
        mountPoint: document.getElementById("dashboard"), // html element in which iframe render
        fetchGuestToken: () => getToken(), // Pass the function reference
        dashboardUiConfig: {
          hideTitle: true,
          hideChartControls: true,
          hideTab: true,
          filterBar: {
            visible: false,         // Hides the native filters sidebar
            expanded: false,
          }

        },
      })
    }



    if (document.getElementById("dashboard")) {
      embed()
    }
    var iframe = document.querySelector("iframe")
    if (iframe) {
      iframe.style.width = '100vw'; // Set the width as needed
      iframe.style.height = '100vw'; // Set the height as needed
      iframe.style.overflow = 'hidden';
    }
  }, [])

  return (
    <div>
      <div id="dashboard" style={{
        overflow: "hidden", scrollLock: "hidden"
      }}></div>
      {/* <DatasetSelectForm /> */}
    </div>

  )
}

export default App