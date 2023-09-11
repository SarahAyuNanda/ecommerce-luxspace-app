import React from "react"
import { languages } from "utils/18next/model"

export interface ILanguageItem {
  icon: string,
  label: string,
  value: languages
}

export interface IDropdownLanguage {
  isShow: boolean,
  value: string,
  data: ILanguageItem[],
  onOpen: () => void,
  onSelect: (event: React.MouseEvent<HTMLLIElement>) => void
}