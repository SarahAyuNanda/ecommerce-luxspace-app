import { useMemo } from "react"
import { useTranslation } from "react-i18next"

const HeroController = () => {
  const { t } = useTranslation()

  const translation = useMemo(() => ({
    title: t('CONTENT.HERO.TITLE'),
    subtitle: t('CONTENT.HERO.SUBTITLE'),
    explore_now: t('EXPLORE_NOW')
  }), [t]) 

  return {
    translation
  }
}

export default HeroController;