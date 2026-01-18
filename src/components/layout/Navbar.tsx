import Image from "next/image";

import logo from "@/src/assets/logos/logo-full.png";
import { LuSearch, LuUser, LuShoppingCart } from "react-icons/lu";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-20 py-5 flex justify-between items-center border-b border-gray-200">
      <Image
        src={logo}
        alt="Logo do BookHive"
        className="w-32 object-contain"
      />

      <div className="w-1/3 bg-gray-500/10 px-4 py-2 text-sm font-semibold flex justify-between items-center rounded-md border border-transparent focus-within:border-gray-400 transition-all">
        <input
          type="text"
          placeholder="Buscar livros..."
          className="w-full focus:outline-none"
        />

        <button className="cursor-pointer">
          <LuSearch className="w-4 h-4 hover:scale-112 transition-transform" />
        </button>
      </div>

      <nav className="font-semibold flex items-center gap-4">
        <button className="px-4 py-1 hover:bg-gray-500/10 rounded-md transition-all duration-300 cursor-pointer">Livros</button>

        <button className="px-4 py-1 hover:bg-gray-500/10 flex items-center gap-1 rounded-md transition-all duration-300 cursor-pointer">
          <LuUser />
          Login
        </button>

        <button className="px-4 py-2 hover:bg-gray-500/10 rounded-md transition-all duration-300 cursor-pointer">
          <LuShoppingCart />
        </button>
      </nav>
    </header>
  );
}