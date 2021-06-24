import Button from "../Button";
import { MenuIcon, CloseIcon } from "../Icons";

const MenuToggleButton = ({ isOpened, setIsOpened }) => {
  return (
    <span>
      <Button
        variant="text"
        type="button"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </span>
  );
};

export default MenuToggleButton;
