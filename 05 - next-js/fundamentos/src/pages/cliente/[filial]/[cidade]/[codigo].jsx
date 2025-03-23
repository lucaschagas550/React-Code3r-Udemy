import Layout from "../../../../components/Layout";
import Navegador from "../../../../components/Navegador";
import { useRouter } from 'next/router'

//o arquivo com [] significa que sera um valor dinamico pela url, 123, 'estado' etc
export default function ClientePorCodigo() {

  //obter valor da rota repare que o query sempre pega o objeto com nome do arquivo, codigo
  const router = useRouter();

  return (
    <div>
      <Layout Titulo="Navegação Dinâmica">
        <span>Código - {router.query.codigo} </span>
        <br />
        <span>Filial - {router.query.filial} </span>
        <br />
        <span>Cidade - {router.query.cidade} </span>
        <Navegador texto="Incio" destino="/" cor="crimson" />
      </Layout>
    </div>
  );
}
