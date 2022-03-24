import React from 'react';
import './progressBar.scss';

type Props = {
    value: number|string
}

const ProgressBar = ({ value }: Props) => {
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
