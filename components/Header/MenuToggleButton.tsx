import { Button } from "../Button";
import { MenuIcon, CloseIcon } from "../Icons";
import { headerProps } from "@/utils/types";

const MenuToggleButton: React.FC<headerProps> = ({ isOpened, setIsOpened }) => {
  return (
    <span>
      <Button
        variant="text"
        type="button"
        onClick={() => setIsOpened!(!isOpened)}
      >
        {isOpened ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </span>
  );
};

export default MenuToggleButton;
