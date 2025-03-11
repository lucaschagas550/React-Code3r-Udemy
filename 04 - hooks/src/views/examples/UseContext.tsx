import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import DataContext, { DataContextType } from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = () => {
  const stateContext = useContext(DataContext);
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext && appContext.number > 1250) {
      appContext.setText("Eita!!!");
    }
  }, [appContext, appContext?.number]);

  function addNumber(delta: DataContextType) {
    stateContext?.setState(delta);
    console.log(delta);
  }

  if (!appContext) {
    return <div>Error: AppContext not found</div>;
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Execício #01" />
      <div className="center">
        <span className="text">{stateContext?.text}</span>
        <span className="text">{stateContext?.number}</span>

        <div>
          <button
            className="btn"
            onClick={() => {
              if (stateContext) {
                stateContext.number = stateContext.number - 1;
                addNumber(stateContext);
              }
            }}
          >
            -1
          </button>
          <button
            className="btn"
            onClick={() => {
              if (stateContext) {
                stateContext.number = stateContext.number + 1;
                addNumber(stateContext!);
              }
            }}
          >
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Execício #02" />
      {
        <div className="center">
          <span className="text">{appContext?.text}</span>
          <span className="text">{appContext?.number}</span>
          <div>
            <button
              className="btn"
              onClick={() => appContext?.setNumber(appContext.number - 1)}
            >
              -1
            </button>
            <button
              className="btn"
              onClick={() => appContext?.setNumber(appContext.number + 1)}
            >
              +1
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default UseContext;
