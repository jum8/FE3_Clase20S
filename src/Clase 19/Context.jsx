import { createContext, useContext, useState } from "react";

export const EstadosGlobales = createContext()
console.log(EstadosGlobales)

const Context = ({children}) => {
    const [salario, setSalario] = useState(100000)
    const [total, setTotal] = useState(0)

    return (
        <EstadosGlobales.Provider
            value={{
                salario,
                setSalario,
                total, 
                setTotal
            }}
        >
            {children}
        </EstadosGlobales.Provider>
    )
}
export default Context

export const useEstadosGlobales = () => {
    return useContext(EstadosGlobales)
}