import { ReactNode } from "react"

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode //children é o que vai ser renderizado dentro do botao
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cores = {
        green: 'from-green-400 to-green-700',
        blue: 'from-blue-400 to-blue-700',
        gray: 'from-gray-400 to-gray-700',
    }

    const cor = props.cor ?? 'gray'
    return (
        <button
            onClick={props.onClick}
            className={`
                bg-gradient-to-r ${cores[cor]}
                text-white px-4 py-2 rounded-md 
                cursor-pointer
                ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}
