import { FaBars } from "react-icons/fa6";

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="sticky left-0 top-0 flex w-full items-center bg-[#f8f4f3] px-6 py-2 shadow-md shadow-black/5">
      <div className="py-3">
        <FaBars
          className="cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
