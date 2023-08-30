import React, { useMemo } from 'react';
import IButtonProps from 'components/Button/Model';

const ButtonView = ({ label, variant = 'filled', type = 'plain', style = '', children = undefined, onClick }: IButtonProps) => {
  const { baseVariant, baseType } = useMemo(() => {
    const usedVariant = {
      filled: 'btn-filled',
      outlined: 'btn-outlined',
      text: 'btn-text'
    }

    const usedType = {
      plain: 'btn-plain',
      rounded: 'btn-rounded',
    }

    return {
      baseVariant: usedVariant[variant],
      baseType: usedType[type]
    }
  }, [variant, type])

  return (
    <button type='button' onClick={onClick} className={`text-center w-max h-auto px-8 py-4 font-montserrat ease-in-out duration-150 ${baseVariant} ${baseType} ${style}`}>
      {children ?? label}
    </button>
  );
};

export default ButtonView;