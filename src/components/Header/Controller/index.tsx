import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const HeaderController = () => {
  const { t } = useTranslation()

  const translation = useMemo(() => ({
    showcase: t('showcase'),
    catalog: t('catalog'),
    delivery: t('delivery'),
    rewards: t('rewards'),
  }), [t])

  return {
    translation
  };
};

export default HeaderController;