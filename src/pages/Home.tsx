import { ListaDeProdutos } from "../data/products";

export function InformacoesProduto() {
    const formatarValor = new Intl.NumberFormat('pt-BR',{
        style: "currency",
        currency: "BRL"
    })
    return (
        <div>
            {ListaDeProdutos.map((produto) => (
                <div key={produto.id}>

                    <img src={produto.imagem} alt={produto.nome}/>
                    {/* Para o produto aparecer na tela, você precisa puxar as propriedades dele aqui dentro: */}
                    <h1>{produto.nome}</h1>

                    <h2>{formatarValor.format(produto.preco)}</h2>

                    <h2>{produto.categoria}</h2>

                    <a href={produto.linkShopee}>
                        Ver na Shopee
                    </a>
                </div>
            ))} 
        </div>
    );
}
