"use client";

import { useEffect } from "react";

export default function NetworkFavicon() {
  useEffect(() => {
    const onlineFavicon = "/favicon-32.png";
    // const offlineFavicon = "/android-chrome.png";
    const offlineFavicon = "/air-favicon.png";

    const updateFavicon = (isOnline) => {
      const favicon = document.querySelector('link[rel="icon"]');
      const shortcut = document.querySelector('link[rel="shortcut icon"]');
      
      const newFavicon = isOnline ? onlineFavicon : offlineFavicon;
      
      if (favicon) {
        favicon.href = newFavicon;
      } else {
        const newFav = document.createElement("link");
        newFav.rel = "icon";
        newFav.href = newFavicon;
        document.head.appendChild(newFav);
      }
      
      if (shortcut) {
        shortcut.href = newFavicon;
      }
    };

    // Set initial favicon based on current status
    updateFavicon(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => updateFavicon(true);
    const handleOffline = () => updateFavicon(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return null; // This compo doesn't render
}