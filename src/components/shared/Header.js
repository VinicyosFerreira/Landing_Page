function Header () {
    return (
        <header>
            <div className='title-area'>
                <h3>Um seleção especial de produtos</h3>
                <h1>especial para você</h1>
                <p className='description-title'>
                    Todos os produtos dessa lista foram selecionados
                    foram selecionados a partir de sua navegação.
                    Aproveite!
                </p>
            </div>

            <section className='info-boxes'>
                <article className='info-box-1'>Conheça a Linx</article>   
                <article>Ajude o algoritmo </article>  
                <article className='info-box-3'>Seus produtos</article>  
                <article>Compartilhe</article>  
            </section>
       </header>
    )
}

export default Header