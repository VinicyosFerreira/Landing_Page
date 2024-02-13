import { Fragment } from "react"

const DesktopMobile = (props) => {
         return (
                <section className="products"> 
                    {props.produtos.map((produto , index) => {
                        return (
                            <Fragment key={'produtos' + index}>
                                <section className='list-products'>
                                    {/* <section className='product-image'>
                                        <img src={produto.image} alt= {'Produto' + index}/>
                                    </section> */}
                                    <section className='info-products'>
                                        <p className="name">{produto.name}</p>
                                        <p className="old-price">De: R${produto.oldPrice}</p>
                                        <p className="price">Por: R${produto.price}</p>
                                        <p className="installments-count">
                                            ou R${produto.installments.count} de R${produto.installments.value}
                                        </p>
                                        <button>Comprar</button>
                                    </section>  
                                </section>       
                            </Fragment>
                        )
                    })}
                 </section>
            )
}

export default DesktopMobile