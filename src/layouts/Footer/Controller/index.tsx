import INavigationCategoryItem from 'layouts/Footer/Model';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const FooterController = () => {
  /* ---------------------------------- CUSTOM HOOK ---------------------------------- */
  const { t } = useTranslation()

  const translation = useMemo(() => ({
    OVERVIEW: t('FOOTER.OVERVIEW'),
    SHIPPING: t('FOOTER.SHIPPING'),
    REFUND: t('FOOTER.REFUND'),
    PROMOTION: t('FOOTER.PROMOTION'),

    COMPANY: t('FOOTER.COMPANY'),
    ABOUT: t('FOOTER.ABOUT'),
    CAREER: t('FOOTER.CAREER'),
    CONTACT_US: t('FOOTER.CONTACT_US'),

    EXPLORE: t('FOOTER.EXPLORE'),
    TERM_CONDITION: t('FOOTER.TERM_CONDITION'),
    PRIVACY_POLICY: t('FOOTER.PRIVACY_POLICY'),
    DEVELOPER: t('FOOTER.DEVELOPER'),

    SPECIAL_LETTER: t('FOOTER.SPECIAL_LETTER'),

    COPYRIGHT: t('FOOTER.COPYRIGHT')
  }), [t])

  /* -------------------------------- CONSTRUCT DATA --------------------------------- */
  const navigationCategoryItem: INavigationCategoryItem[] = [
    {
      category: translation.OVERVIEW,
      item: [
        { label: translation.SHIPPING, path: '/shipping' },
        { label: translation.REFUND, path: '/refund' },
        { label: translation.PROMOTION, path: '/promotion' },
      ]
    },
    {
      category: translation.COMPANY,
      item: [
        { label: translation.ABOUT, path: '/about' },
        { label: translation.CAREER, path: '/career' },
        { label: translation.CONTACT_US, path: '/contact-us' },
      ]
    },
    {
      category: translation.EXPLORE,
      item: [
        { label: translation.TERM_CONDITION, path: '/term-condition' },
        { label: translation.PRIVACY_POLICY, path: '/privacy-policy' },
        { label: translation.DEVELOPER, path: '/developer' },
      ]
    },
  ]
  return {
    translation,

    navigationCategoryItem
  }
};

export default FooterController;