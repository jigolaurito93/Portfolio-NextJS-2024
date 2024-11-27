import React from "react";
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  PostgreSQLIcon,
  PythonIcon,
  SupabaseIcon,
  TypescriptIcon,
} from "../Icons";

const Languages = () => {
  return (
    <div className="flex flex-col ">
      <h1>Languages/Database</h1>
      <div className="flex items-start justify-start">
        <PythonIcon />
        <HTMLIcon />
        <CSSIcon />
        <JavaScriptIcon />
        <TypescriptIcon />
        <SupabaseIcon />
        <PostgreSQLIcon />
      </div>
    </div>
  );
};

export default Languages;
