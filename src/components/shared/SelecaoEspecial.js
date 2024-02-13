import {useState , useEffect} from 'react'
import ComponenteMobile from '../mobile/ComponenteMobile';
import DesktopMobile from '../desktop/DesktopComponent';

function SelecaoEspecial () {

    const [produtos , setProdutos] = useState([]);
    const [pagina , setPagina] = useState(1);
    const [tela , setTela] = useState(window.innerWidth);
    const maxPages = 5;
    const messageMaxPages = <p className='max-pages'>Não há mais produtos para listar</p>

    function handleResize() {
        setTela(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize' , handleResize);
        
        return() => {
        window.removeEventListener('resize' , handleResize)    
        }
    })

    useEffect(() => {
        async function apiProdutos() {
            try {
                const api = await fetch (`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pagina}`)
                const resposta = await api.json();
                if(pagina === 1) {
                     setProdutos(resposta.products);
                 } else {
                     setProdutos(prevProdutos => [...prevProdutos , ...resposta.products]);
                 }
                 
            } catch(error) {
                console.log(error);
            }
        }
        apiProdutos()
    } , [pagina])


    async function carregarProdutosApi(e) {
        if(pagina <= maxPages) {
            e.preventDefault();
            console.log(pagina , maxPages);
            setPagina(pagina + 1);
        }
        e.preventDefault();
    }
    
    return (
        <section className="special-selection">
            <section className="special-selection-title">
                <hr/>
                <h3>Sua seleção especial</h3>
            </section>
            {tela < 1200
                ? <ComponenteMobile produtos={produtos}></ComponenteMobile>
                : <DesktopMobile produtos={produtos}></DesktopMobile>
            }
            <section className="more-products">
            {pagina > 5 && messageMaxPages}
                <a href="#">
                    <button id="carregar-produtos-api" onClick={carregarProdutosApi}>Ainda mais produto aqui!</button>
                </a>
            </section>
        </section>
    )

}

export default SelecaoEspecial