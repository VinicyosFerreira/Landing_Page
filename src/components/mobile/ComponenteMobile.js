import { Fragment } from "react"

const ComponenteMobile = (props) => {
         return (
                <section className="products"> 
                    {props.produtos.map((produto) => {
                        return (
                            <Fragment key={'produtos' + produto.id}>
                                <section className="product-image">
                                        <img src={produto.image} alt= {'Produto' + produto.id}/>
                                </section> 
                                <section className="info-products">
                                    <p className="name">{produto.title}</p>
                                    <p className="price">De: R${produto.category}</p>
                                    <p className="old-price">Por: R${produto.price}</p>        
                                    <button>Comprar</button>
                                </section>
                            </Fragment>
                        )
                    })}
                 </section>
        )

}

export default ComponenteMobile