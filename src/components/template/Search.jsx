import React from "react";
import { SectionContent } from "../atoms/SectionContent";
import SectionHeader from "../molecules/SectionHeader";
import SearchBar from "../molecules/SearchBar";

export default function Search() {
  return (
    <>
      <SectionHeader search />
      <SectionContent>
        <SearchBar />
      </SectionContent>
    </>
  );
}