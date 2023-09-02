import INavigationItem from "layouts/Header/Model"

interface ISidemenuProps {
  isOpen?: boolean,
  data: INavigationItem[],
  onClose: () => void
}

export default ISidemenuProps