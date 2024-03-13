import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("The network connection has been lost.");
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      console.log("You are now connected to the network.");
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
