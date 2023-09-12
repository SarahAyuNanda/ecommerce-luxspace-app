import { ReactNode } from "react"

type Variants = 'filled' | 'outlined' | 'text' | 'icon'
type Types = 'plain' | 'rounded'

interface IButtonProps {
  label: String,
  variant: Variants,
  type: Types,
  children?: ReactNode,
  onClick: () => void
}

export default IButtonProps