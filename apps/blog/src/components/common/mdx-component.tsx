import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMDXComponents = (code: string) => {
  const codeFunction = new Function(code);

  return codeFunction({ ...runtime }).default;
};

const components = {
  Image,
};

interface MdxProps { 
  code: string;
}

export const MDXContent = ({ code }: MdxProps) => {
  const MDXComponent = useMDXComponents(code);
  return <MDXComponent components={components} />;
};

export default MDXContent;
