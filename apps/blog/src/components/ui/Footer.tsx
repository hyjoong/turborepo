import Link from "next/link";
import { siteConfig } from "@/config/site";
import Github from "@/components/Icons/Github";
import Linkedin from "@/components/Icons/Linkedin";
import Mail from "@/components/Icons/Mail";

const Footer = () => {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <Link href={`mailto:${siteConfig.links.mail}`}>
            <Mail className='h-6 w-6' />
          </Link>
          <Link href={siteConfig.links.github}>
            <Github className='h-6 w-6' />
          </Link>
          <Link href={siteConfig.links.linkedin}>
            <Linkedin className='h-6 w-6' />
          </Link>
        </div>
        <div className='mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>{siteConfig.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href='/'>{siteConfig.name}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
