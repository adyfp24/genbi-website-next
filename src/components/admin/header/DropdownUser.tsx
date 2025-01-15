import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Super Admin
          </span>
          <span className="block text-xs">Humas GenBI Jember</span>
        </span>

      </Link>
    </>
  );
};

export default DropdownUser;
