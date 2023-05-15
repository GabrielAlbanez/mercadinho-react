import {createContext,useState} from "react"

export const BuscaContext = createContext()

export const BuscaContextProvider = ({children}) =>{

    const [busca,setBusca] = useState("")

    return(
        <BuscaContext.Provider value = {{busca,setBusca}}>
            {children}
        </BuscaContext.Provider>
    )

}