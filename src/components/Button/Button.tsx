import React from 'react';

type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className: string;
};

const Button = ({ clickEvent, text, className }: ButtonProps) => {
  return (
    <button className={`button ${className}`} onClick={clickEvent}>
      {text}
    </button>
  );
};

export default Button;
