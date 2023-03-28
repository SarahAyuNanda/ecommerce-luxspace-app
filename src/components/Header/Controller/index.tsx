import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HeaderController = () => {
  // -------------------- HOOK --------------------
  const { t } = useTranslation()
  
  const [isShowMenu, setIsShowMenu] = useState(false)

  const translation = useMemo(() => ({
    showcase: t('showcase'),
    catalog: t('catalog'),
    delivery: t('delivery'),
    rewards: t('rewards'),
  }), [t])

  // -------------------- HANDLER FUNCTION --------------------
  const onShowHideNavigationMenu = () => {
    setIsShowMenu(!isShowMenu)
  }
    
  return {
    translation,
    isShowMenu,
    setIsShowMenu,
    onShowHideNavigationMenu,
  };
};

export default HeaderController;