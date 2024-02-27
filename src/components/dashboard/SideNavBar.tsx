import { cn } from "@/utils/style";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

interface SideNavBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={cn(
        "scrollbar h-full w-64 overflow-y-auto bg-[#f8f4f3] p-4",
        "transition-all ease-in-out",
        isOpen ? "ml-0" : "-ml-64"
      )}
    >
      <Link
        className="flex items-center border-b border-b-gray-800 pb-4"
        href={"/"}
      >
        <h1 className="text-2xl font-bold">Logo</h1>
      </Link>
      <div className="mt-4 flex flex-col gap-4">
        <span className="font-bold text-gray-400">ADMIN</span>
        <div className="mb-1 flex flex-col gap-1">
          <Link
            href={"/dashboard/"}
            className="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          >
            <FaHouse className="mr-3 text-lg" />
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link
            href={"/dashboard/"}
            className="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          >
            <FaHouse className="mr-3 text-lg" />
            <span className="text-sm">Users</span>
          </Link>
          <Link
            href={"/dashboard/"}
            className="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          >
            <FaHouse className="mr-3 text-lg" />
            <span className="text-sm">Activities</span>
          </Link>
        </div>

        <span className="font-bold text-gray-400">Course</span>
        <div className="group mb-1">
          <Link
            href={"/dashboard/course"}
            className="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          >
            <FaHouse className="mr-3 text-lg" />
            <span className="text-sm">Course</span>
          </Link>
          <Link
            href={"/dashboard/"}
            className="flex items-center rounded-md px-4 py-2 font-semibold text-gray-900 hover:bg-gray-950 hover:text-gray-100"
          >
            <FaHouse className="mr-3 text-lg" />
            <span className="text-sm">Archive</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
