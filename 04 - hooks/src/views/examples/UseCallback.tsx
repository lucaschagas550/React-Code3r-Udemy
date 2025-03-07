import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'


const UseCallback = () => {
    const [count, setCount] = useState(0)
    
    //useCallback Retorna uma funcao cacheada
    const inc = useCallback(function (delta: number) {
        console.log(delta);
        setCount(curr => curr + delta)
    }, [setCount]) //setCount por ser criado apenas 1 vez, faz com que o componente UseCallbackButtons seja renderizado apenas 1 vez por causa do useMemo tambem

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!" />

            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons incr={inc} />
            </div>
        </div>
    )
}

export default UseCallback