import React from 'react';
import IButtonProps from 'components/Button/Model';

const ButtonView = ({label, variant = 'filled', style = '', children = undefined, onClick}: IButtonProps) => {
  return (
    <button type='button' onClick={onClick} className='font-montserrat'>
      {children ?? label}
    </button>
  );
};

export default ButtonView;