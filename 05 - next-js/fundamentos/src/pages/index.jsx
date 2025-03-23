import Navegador from '../components/Navegador';

//O Next.js tem a convenca de rotas por meio de arquivos e pastas dentro da pages, ou seja, localhost/abc/def/teste.
export default function Incio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flex: 'wrap',
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" cor='#9400d3'/>
      <Navegador texto="Exemplo" destino="/exemplo" cor='crimson'/>
      <Navegador texto="Home" destino="/"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor='green'/>
      <h1>Inicio</h1>
    </div>
  );
}