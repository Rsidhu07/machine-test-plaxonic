import React from "react";
import "./SectionImage.css";

const SectionImage = ({ imgUrl, className, width, height }) => {
  return (
    <div>
      <img
        className={className ? className : ""}
        src={imgUrl}
        alt="takyanImage"
        width={ width ? width: '' }
        height={ height?height: ''}
      ></img>
    </div>
  );
};

export default SectionImage;
