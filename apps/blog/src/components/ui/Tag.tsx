import Link from "next/link";
import { badgeVariants } from "./badge";

interface TagProps {
  tag: string;
  isActive?: boolean;
  count?: number;
}

const Tag = ({ tag, isActive, count }: TagProps) => {
  return (
    <Link
      className={badgeVariants({
        variant: isActive ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={`?tag=${tag}`}
    >
      {tag} {count && `(${count})`}
    </Link>
  );
};

export default Tag;
