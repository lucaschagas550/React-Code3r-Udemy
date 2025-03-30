import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex justify-center items-start h-screen
      bg-gradient-to-r from bg-purple-500 to-blue-600
      text-white scroll-auto
    `}
    >
      <Layout titulo="Cadastro Simples">
        <span>Coteudo</span>
      </Layout>
    </div>
  );
}
