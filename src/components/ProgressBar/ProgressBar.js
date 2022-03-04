import React from 'react';
import './progressBar.scss';

const ProgressBar = ({ value }) => {
    return (
        <div>
            <label htmlFor="bar"></label>
            <progress
                id="bar"
                max="100"
                value={value}
                className="stats__bar"
            ></progress>
        </div>
    );
};

export default React.memo(ProgressBar);
