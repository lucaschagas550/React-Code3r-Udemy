//props eh somente leitura
export default function Cabecalho(props){
    console.log(props);

    return (
        <h1>{props.titulo}</h1>
    );
}