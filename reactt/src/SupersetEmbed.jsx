
import { useEffect, useRef } from "react";
import { embedDashboard } from "@superset-ui/embedded-sdk";

export default function SupersetEmbed({ supersetDomain, dashboardId, tokenUrl, height = 1000 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const resp = await fetch(tokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dashboardId }),
        credentials: "include",
      });
      const { token } = await resp.json();
      if (!mountRef.current || cancelled) return;
      console.log(token)
      await embedDashboard({
        id: dashboardId,
        supersetDomain,
        mountPoint: mountRef.current,
        fetchGuestToken:token,
        dashboardUiConfig: {
          hideTitle: true,
          hideTab: true,
          hideChartControls: true,
          filters: { expanded: true },
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [supersetDomain, dashboardId, tokenUrl]);

  return <div ref={mountRef} style={{ width: "100%", minHeight: `${height}px` }} />;
}
