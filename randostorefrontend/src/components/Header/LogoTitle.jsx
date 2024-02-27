import React from "react";
import { HEADER } from "../../constants/constant";

const LogoTitle = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        <a href="/" className="text-gray-800 hover:text-gray-900">
          {HEADER.logoTitle}
        </a>
      </h1>
    </div>
  );
};

export default LogoTitle;
