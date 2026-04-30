import { useState, useEffect } from "react";

export default function useTranslate(text) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    async function translate() {
      if (!text) return;
      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: text,
            source: "en",
            target: "pt",
            format: "text",
          }),
        });

        const data = await res.json();
        setTranslated(data.translatedText); // atualiza o estado
      } catch (error) {
        console.error("Erro na tradução:", error);
        setTranslated(text); // fallback para o texto original
      }
    }

    translate(); // aqui você chama a função
  }, [text]);

  return translated;
}
