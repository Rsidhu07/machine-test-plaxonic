import React from 'react';
import './SectionText.css';

const SectionText = ({title1,title2,paragraph1,paragraph2}) => {
    return (
        <div>
            <h3 className='title-1'>{title1}</h3>
            <h3 className='title-2'>{title2}</h3>
            <p className='paragraph-1'>{paragraph1}</p>
            <p className='paragraph-2'>{paragraph2}</p>
        </div>
    )
}

export default SectionText;
