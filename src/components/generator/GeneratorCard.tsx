"use client";

import { useState } from "react";
import { TextInputArea } from "./TextInputArea";
import { StyleResultList } from "./StyleResultList";

const EXAMPLE_TEXT = "Havalı yazı stilleri ile ismimi güzelleştir";

export const GeneratorCard = () => {
  const [value, setValue] = useState("");

  const handleTryExample = () => {
    setValue(EXAMPLE_TEXT);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <section aria-label="Yazı stilleri oluşturma aracı" className="mt-8 space-y-4">
      <TextInputArea
        value={value}
        onChange={setValue}
        onTryExample={handleTryExample}
        onClear={handleClear}
      />
      <StyleResultList input={value} />
    </section>
  );
};

