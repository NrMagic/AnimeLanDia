import { useState, useEffect } from "react";

export default function useTranslate(text) {
  const [translated, setTranslated] = useState(text || "");

  useEffect(() => {
    if (!text) {
      setTranslated("");
      return;
    }

    let isMounted = true;

    async function translate() {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: text,
            source: "en",
            target: "pt",
            format: "text",
          }),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (!res.ok) {
          throw new Error(`Erro HTTP: ${res.status}`);
        }

        const data = await res.json();

        if (isMounted) {
          setTranslated(data?.translatedText || text);
        }
      } catch (error) {
        console.error("Erro na tradução:", error);

        if (isMounted) {
          setTranslated(text);
        }
      }
    }

    translate();

    return () => {
      isMounted = false;
    };
  }, [text]);

  return translated;
}