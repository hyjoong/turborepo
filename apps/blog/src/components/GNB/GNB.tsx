import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import Logo from "../Icons/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

const GNB = () => {
  return (
    <header className='sticky top-0 w-full pt-8 pb-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <Link href='/' className='mr-6 flex items-center space-x-2'>
          <Logo />
        </Link>
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <MainNav />
            <div className='ml-3 lg:ml-5'>
              <ThemeToggle />
            </div>
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GNB;
