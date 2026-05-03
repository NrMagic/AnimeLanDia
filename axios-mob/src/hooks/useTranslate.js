import { useState, useEffect } from "react";

export default function useTranslate(text) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    async function translate() {
      if (!text) return;
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        const res = await fetch("https://translate.argosopentech.com/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: text,
            source: "en",
            target: "pt",
            format: "text",
          }),
          signal: controller.signal,
        });
        clearTimeout(timeout);

        const data = await res.json();
        setTranslated(data?.translatedText || text);
      } catch (error) {
        console.error("Erro na tradução:", error);
        setTranslated(text);
      }
    }

    translate();
  }, [text]);

  return translated;
}
