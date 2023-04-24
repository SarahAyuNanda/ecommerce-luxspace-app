import { ReactNode } from "react"

type Variants = 'filled' | 'outline' | 'text'

interface IButtonProps {
  label: String,
  variant: Variants,
  style?: String,
  children?: ReactNode,
  onClick: () => void
}

export default IButtonProps