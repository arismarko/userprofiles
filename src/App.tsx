import React from "react";
import { useGetter } from "@alicante-microfrontends/runtime-react";

export function App() {
  const locale = useGetter("locale");

  return (
   <h2>
      {locale === "en" ? `🇬🇧 Hello micro-frontend react2` : `🇪🇸 Hola  micro-frontend react2`}{" "}
    </h2>
  );
}
