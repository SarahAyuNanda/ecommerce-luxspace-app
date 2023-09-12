import INavigationItem from "layouts/Header/Model"

interface INavigationMenuProps {
  isOpen?: boolean,
  data: INavigationItem[],
  onClose: () => void
}

export default INavigationMenuProps