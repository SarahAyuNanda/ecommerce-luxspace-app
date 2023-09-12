import React, { useMemo } from 'react';
import IButtonProps from 'components/Button/Model';

const ButtonView = ({ label, variant = 'filled', type = 'plain', children = undefined, onClick }: IButtonProps) => {
  const { baseVariant, baseType } = useMemo(() => {
    const usedVariant = {
      filled: 'btn-filled',
      outlined: 'btn-outlined',
      text: 'btn-text',
      icon: 'btn-icon'
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
    <button type='button' onClick={onClick} className={`text-center w-max h-max font-montserrat ease-in-out duration-150 ${baseVariant} ${baseType}`}>
      {children ?? label}
    </button>
  );
};

export default ButtonView;