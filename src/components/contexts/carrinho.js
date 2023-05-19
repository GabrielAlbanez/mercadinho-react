import {createContext, useState} from 'react'


export const CarrinhoContext = createContext()


export const CarrinhoContextProvier = ({children}) =>{
 
    const [carrinhoCard,setCarrinhoCard] = useState([])

    return(
        <CarrinhoContext.Provider value={{carrinhoCard,setCarrinhoCard}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

