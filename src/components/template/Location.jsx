import React from "react";
import { SectionContent } from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";
import LoMinimap from "../organisms/LoMinimap";
import LoInfo from "../molecules/LoInfo";
import LoIngEx from "../molecules/LoIngEx";

export default function Location() {
  return (
    <>
      <SectionHeader location />
      <SectionContent>
        <LoMinimap />
        {/* <LoInfo /> */}
        <LoIngEx />
      </SectionContent>
    </>
  );
}