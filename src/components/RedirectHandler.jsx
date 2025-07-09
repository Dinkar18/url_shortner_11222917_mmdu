import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUrlStore from "../store/urlStore";
import { logEvent } from "../utils/loggerMiddleware";

const RedirectHandler = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();
  const { urls, updateClick } = useUrlStore();

  useEffect(() => {
    const urlEntry = urls.find((u) => u.shortcode === shortcode);
    if (!urlEntry) {
      return navigate("/");
    }

    // Log click
    updateClick(shortcode, {
      time: new Date().toISOString(),
      source: document.referrer,
      location: "Coarse Location", // You can use a geolocation API
    });

    logEvent("REDIRECT", { shortcode });

    window.location.href = urlEntry.originalUrl;
  }, [shortcode]);

  return null;
};

export default RedirectHandler;
