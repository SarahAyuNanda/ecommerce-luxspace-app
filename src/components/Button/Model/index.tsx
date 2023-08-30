import { ReactNode } from "react"

type Variants = 'filled' | 'outlined' | 'text'
type Types = 'plain' | 'rounded'

interface IButtonProps {
  label: String,
  variant: Variants,
  type: Types,
  style?: String,
  children?: ReactNode,
  onClick: () => void
}

export default IButtonProps