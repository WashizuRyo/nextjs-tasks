import Link from "next/link";
import NavList from "./NavList/NavList";

export const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div>
        <Link href="/" className="px-4 text-3xl font-bold hover:text-blue-500">
          Next Tasks
        </Link>
        <NavList />
      </div>
    </div>
  );
};
