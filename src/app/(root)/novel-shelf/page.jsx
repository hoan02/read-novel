"use client";

import { useState } from "react";

const NovelShelfPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <div className="bg-white ">ok</div>;
};

export default NovelShelfPage;
