"use client";

import { useState } from "react";
import { TextInputArea } from "./TextInputArea";
import { ItalicStyleList } from "./ItalicStyleList";

const EXAMPLE_TEXT = "SajidKhanNiazi";

export const ItalicGeneratorCard = () => {
  const [value, setValue] = useState("");

  const handleTryExample = () => {
    setValue(EXAMPLE_TEXT);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <section aria-label="İtalik eğik yazı stili oluşturma aracı" className="mt-8 space-y-4">
      <TextInputArea
        value={value}
        onChange={setValue}
        onTryExample={handleTryExample}
        onClear={handleClear}
        title="İtalik Eğik Yazı"
        placeholder="Örnek: İsmini zarif el yazısı ve italik fontlara dönüştür..."
      />
      <ItalicStyleList input={value} />
    </section>
  );
};
