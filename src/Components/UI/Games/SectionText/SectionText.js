import React from "react";
import "./SectionText.css";

const SectionText = ({
  title1,
  title2,
  paragraph1,
  paragraph2,
  title1ClassName,
}) => {
  return (
    <div className="section-text">
      <h3 className={title1ClassName ? title1ClassName : "title-1-grey"}>
        {title1}
      </h3>
      <h3 className="title-2">{title2}</h3>
      <p className="paragraph-1">{paragraph1}</p>
      <p className="paragraph-2">{paragraph2}</p>
    </div>
  );
};

export default SectionText;
