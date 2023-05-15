import {createContext,useState} from "react"

export const ProdutoContext = createContext()

export const ProdutoContextProvider = ({children}) =>{

    const ListaProdutos =  [
        {
          nome: "morango",
          quantidade: "quantidade: 1 caixa",
          Valor: "valor:" + 12.5,
          linkImg:
            "https://assets.revistacultivar.com.br/391ac-Morango---Wenderson-Araujo---CNA.jpg",
        },
        {
          nome: "Leite",
          quantidade: "quantidade:  1 caixa",
          Valor:"valor:" + 5.9,
          linkImg:
            "https://www.tirol.com.br/wp-content/uploads/apollo13_images/leites-2-1-6xiu5n1uub8j8znt1h9bg160b8y8cgkc4a.png",
        },
        {
          nome: "Cerveja Heineken",
          quantidade: "quantidade:  1 caixa",
          Valor:"valor:" + 4.9,
          linkImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyEaR74Z-HOdiHtD_gYBYf9awibzwGqirSPciqnMfW4HjqaBymmt8r4Q1B8DicDTveko&usqp=CAU",
        },
        {
          nome: "Toma Halk",
          quantidade: "quantidade:  1 peça",
          Valor:"valor:" + 123.9,
          linkImg:
            "https://www.portaldbo.com.br/wp-content/uploads/2022/02/carne-premium_destaque.png",
        },
        {
          nome: "Nescau",
          quantidade: "quantidade:  1 pote",
          Valor:"valor:" + 12.9,
          linkImg: "https://novapp.files.wordpress.com/2009/11/nescau-trad2.jpg",
        },
        {
          nome: "Colca Cola",
          quantidade: "quantidade:  1 lata",
          Valor:"valor:" + 5.9,
          linkImg:
            "data:image/jpeg;base64,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",
        },
        {
          nome: "Mel",
          quantidade: "quantidade:  1 vidro",
          Valor:"valor:" + 50.9,
          linkImg:
            "https://70096.cdn.simplo7.net/static/70096/sku/delicias-mineiras-mel-goumet-florada-cipo-uva-500g-nectar-da-canastra--p-1661614805982.png",
        },
        {
          nome: "Guarana Antardida",
          quantidade: "quantidade:  1 lata",
          Valor:"valor:" + 5.9,
          linkImg:
            "https://upload.wikimedia.org/wikipedia/commons/c/cd/Guaran%C3%A1_Antarctica.jpg",
        },
    
        {
          nome: "Banana",
          quantidade: "quantidade: 1 unidade",
          Valor:"valor:" + 4.9,
          linkImg:
            "https://cerradocase.com.br/wp-content/uploads/2021/11/bananas-hanging-rope-scaled.jpg",
        },
        {
          nome: "Peito de Frango",
          quantidade: "quantidade:  1 peça",
          Valor:"valor:" + 20.9,
          linkImg:
            "https://superprix.vteximg.com.br/arquivos/ids/192716-600-600/591084.jpg?v=637426168463270000",
        },
        {
          nome: "Pão Francês",
          quantidade: "quantidade:  1 unidade",
          Valor:"valor:" + 1.5,
          linkImg:
            "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/10/29/istock-91836593-(1)-t4vqebpcuecw.jpg",
        },
        {
          nome: "dunots",
          quantidade: "quantidade:  1 unidade",
          Valor:"valor:" + 20.5,
          linkImg:
            "https://www.confeiteiradesucesso.com/wp-content/uploads/2018/09/donutsgourmet-fb.jpg",
        },
        {
          nome: "Sorverte Gelato",
          quantidade: "quantidade:  1 pote",
          Valor:"valor:" + 30.9,
          linkImg:
            "https://www.embalagemmarca.com.br/wp-content/uploads/2016/05/9bb24147e5ec64b374f5c718c270efd9.jpg",
        },
        {
          nome: "Barra de Chocolate",
          quantidade: "quantidade:  1 barra",
          Valor:"valor:" + 12.9,
          linkImg:
            "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_lacta.jpg?quality=70&strip=info&w=960",
        }
      ];

    return(
        <ProdutoContext.Provider value = {{ListaProdutos}}>
            {children}
        </ProdutoContext.Provider>
    )

}