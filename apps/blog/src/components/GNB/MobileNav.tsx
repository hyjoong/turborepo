'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@ui/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

// import { siteConfig } from "@/config/site";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <div className='flex flex-col gap-3 mt-3 font-bold'>
          {/* <MobileLink onOpenChange={setOpen} href='/'>
            HOME
          </MobileLink> */}
          <MobileLink onOpenChange={setOpen} href='/blog'>
            BLOG
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/projects'>
            PROJECTS
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/diary'>
            DIARY
          </MobileLink>
          {/* <Link target='_blank' rel='noreferrer' href={siteConfig.links.github}>
            Github
          </Link> */}
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default MobileNav;
