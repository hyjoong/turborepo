'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const MainNav = () => {
  const pathname = usePathname();
  const links = [
    { href: '/blog', label: 'BLOG' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/diary', label: 'DIARY' },
  ];

  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-bold transition-colors hover:text-primary hidden sm:inline-block',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
