"use client";

import { useState } from "react";
import { TextInputArea } from "./TextInputArea";
import { BoldStyleList } from "./BoldStyleList";

const EXAMPLE_TEXT = "SajidKhanNiazi";

export const BoldGeneratorCard = () => {
  const [value, setValue] = useState("");

  const handleTryExample = () => {
    setValue(EXAMPLE_TEXT);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <section aria-label="Kalın yazı stili oluşturma aracı" className="mt-8 space-y-4">
      <TextInputArea
        value={value}
        onChange={setValue}
        onTryExample={handleTryExample}
        onClear={handleClear}
        title="Kalın Yazı Stili"
        placeholder="Örnek: İsmini kalın ve dikkat çekici fontlara dönüştür..."
      />
      <BoldStyleList input={value} />
    </section>
  );
};
