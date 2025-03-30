import { ReactNode } from "react";
import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3 
            bg-white text-gray-800 rounded-md
            mt-10
        `}
    >
      <Titulo titulo={props.titulo} />
      <div className="p-6">{props.children}</div>
    </div>
  );
}
