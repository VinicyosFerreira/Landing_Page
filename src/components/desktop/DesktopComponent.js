const DesktopMobile = (props) => {



         return (
                <section className="products"> 
                    {props.produtos && props.produtos.map((produto) => {
                        return (
                             <section className='list-products' key={'Produto' + produto.id}>
                                    <section className='product-image'>
                                        <img src={produto.image} alt={'Imagem' + produto.id}/>
                                    </section> 
                                    <section className='info-products'>
                                        <p className="name">{produto.title}</p>
                                        <p className="old-price">{produto.category}</p> 
                                        <p className="price">R${produto.price}</p>
                                        <button>Comprar</button>
                                    </section>  
                            </section> 
                            
                        )
                    })}
                 </section>
            )
        }

export default DesktopMobile