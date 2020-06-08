import React, { FC } from "react";

import DescriptionArea from "./DescriptionArea";
import { DESCRIPTION } from "./constance";

const Descriptions: FC = () => {
  return (
    <>
      {DESCRIPTION.map((d) => (
        <DescriptionArea
          key={d.title}
          top={d.top}
          right={d.right === undefined ? null : d.right}
          left={d.left === undefined ? null : d.left}
          title={d.title}
          zIndex={d.zIndex}
          description={d.description}
        />
      ))}
    </>
  );
};

export default Descriptions;
