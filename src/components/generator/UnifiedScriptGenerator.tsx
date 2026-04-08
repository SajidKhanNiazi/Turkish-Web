"use client";

import { useState } from "react";
import { ScriptNickTool } from "./ScriptNickTool";
import { HeartComboSection } from "./HeartComboSection";

export default function UnifiedScriptGenerator() {
  const [nick, setNick] = useState("");

  return (
    <>
      <ScriptNickTool value={nick} onChange={setNick} />
      <HeartComboSection value={nick} />
    </>
  );
}
