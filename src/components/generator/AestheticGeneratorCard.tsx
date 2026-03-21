"use client";

import { useState } from "react";
import { PremiumTextInput } from "./PremiumTextInput";
import { AestheticStyleList } from "./AestheticStyleList";

const EXAMPLE_TEXT = "Aesthetic Styles";

export const AestheticGeneratorCard = () => {
  const [value, setValue] = useState("");

  const handleTryExample = () => {
    setValue(EXAMPLE_TEXT);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <section aria-label="Dekoratif estetik yazı oluşturma aracı" className="mt-8 space-y-8">
      <PremiumTextInput
        value={value}
        onChange={setValue}
        onTryExample={handleTryExample}
        onClear={handleClear}
        title="Şık Yazı Oluşturucu"
        placeholder="İsminizi veya metninizi yazın..."
      />
      <div className="w-full">
        <AestheticStyleList input={value} />
      </div>
    </section>
  );
};
