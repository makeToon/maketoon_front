import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FromAtagToId: FC = ({ children }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash.split("#")[1] !== undefined) {
      const element = document.getElementById(hash.split("#")[1]);
      element.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  },        [hash]);

  return <>{children}</>;
};

export default FromAtagToId;
