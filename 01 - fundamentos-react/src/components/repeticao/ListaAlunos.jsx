import React from 'react'; //JSX Precisa deste import
import alunos from '../../data/alunos'
export default (props) => {

    const alunosLI = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        );
    });

    function getAlunos()
    {
        return alunos.map((aluno) => 
        {
            return (
                <li key={aluno.id}>
                    {aluno.id}) {aluno.nome} - {aluno.nota}
                </li>
            );
        })
    };

    return (
        <div>
            <ul style={{ listStyle: "none" }}>{getAlunos()}</ul>
        </div>
    );
};