import {useState , useEffect} from 'react'
import ComponenteMobile from '../mobile/ComponenteMobile';
import DesktopMobile from '../desktop/DesktopComponent';

function SelecaoEspecial () {

    const [produtos , setProdutos] = useState([]);
    const [tela , setTela] = useState(window.innerWidth);
    const [limit , setLimit] = useState(8);
    const [message , setMessage] = useState(false);
    const limitProduct = 20;

    const handleResize = () => {
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
                const api = await fetch (`https://fakestoreapi.com/products?limit=${limit}`)
                const resposta = await api.json();
   
                if(limit <= 8 ) {
                    setProdutos(resposta);
                } else {
                   setProdutos(prevState => {
                       const newProducts = resposta.filter((newProduct => {
                        return !produtos.some((produto => { 
                            return produto.id === newProduct.id
                       }))
                    }))

                    return [...prevState , ...newProducts]
                })
                }
            } catch(error) {
                console.log(error);
            }
        }
        apiProdutos()
    } , [limit])


    async function carregarProdutosApi(e) {
        if(limit <= limitProduct) {
            e.preventDefault();
            setLimit(limit + 8); 
        } else {
            e.preventDefault();
            setMessage(true);
        }
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
            {message && <p className='max-products'>Não há mais produtos para listar</p>}
                <a href="#">
                    <button id="carregar-produtos-api" onClick={carregarProdutosApi}>Ainda mais produto aqui!</button>
                </a>
            </section>
        </section>
    )

}

export default SelecaoEspecial