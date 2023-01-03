import Image from "next/image";
import Link from "next/link";

function Header() {
   return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
         <div className="flex items-center space-x-2">
            <Link
               href="/"
               className="flex items-center justify-center w-10 h-10 rounded-full bg-red-400"
            >
               <h1 className="text-3xl">A</h1>
            </Link>
            <h1>Blog App</h1>
         </div>
         <div>{/* Somethinh here */}</div>
      </header>
   );
}

export default Header;
