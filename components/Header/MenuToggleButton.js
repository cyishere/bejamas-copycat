import { MenuIcon, CloseIcon } from "../Icons";

const MenuToggleButton = ({ isOpened, setIsOpened }) => {
  return (
    <span>
      <button type="button" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <CloseIcon /> : <MenuIcon />}
      </button>
    </span>
  );
};

export default MenuToggleButton;
