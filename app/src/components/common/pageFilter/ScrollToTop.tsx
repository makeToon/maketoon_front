import { FC, useEffect, ReactElement } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FC<{ children: ReactElement }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  },        [pathname]);

  return children;
};

export default ScrollToTop;
