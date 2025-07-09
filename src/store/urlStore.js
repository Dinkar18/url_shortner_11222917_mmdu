// urlStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUrlStore = create(
  persist(
    (set) => ({
      urls: [],
      addUrl: (urlData) =>
        set((state) => ({
          urls: [...state.urls, urlData],
        })),
      updateClick: (shortcode, clickData) =>
        set((state) => ({
          urls: state.urls.map((url) =>
            url.shortcode === shortcode
              ? { ...url, clicks: [...(url.clicks || []), clickData] }
              : url
          ),
        })),
    }),
    {
      name: "url-storage",
    }
  )
);

export default useUrlStore; // ✅ default export
