import Link from 'next/link';

//O Next.js tem a convenca de rotas por meio de arquivos e pastas dentro da pages, ou seja, localhost/abc/def/teste.
export default function Incio() {
  return (
    <div>
      <Link href="/estiloso">Estiloso</Link>
      <br />
      <Link href="/exemplo">Exemplo</Link>
      <h1>Inicio</h1>

    </div>
  );
}