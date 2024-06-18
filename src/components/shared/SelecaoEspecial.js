import {useState , useEffect} from 'react'
import ComponenteMobile from '../mobile/ComponenteMobile';
import DesktopMobile from '../desktop/DesktopComponent';

function SelecaoEspecial () {

    const [produtos , setProdutos] = useState([]);
    const [tela , setTela] = useState(window.innerWidth);
    const [limite , setLimite] = useState(8);
    const [mensagem , setMensagem] = useState(false);
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
                const api = await fetch (`https://fakestoreapi.com/products?limit=${limite}`)
                const resposta = await api.json();
   
                if(limite <= 8 ) {
                    setProdutos(resposta);
                } else {
                    setProdutos(prevState => {  
                       const newProducts = resposta.filter((newProduct => {
                        return !prevState.some((produto) => produto.id === newProduct.id)
                    }))
                    return [...prevState , ...newProducts]
                })
                }
            } catch(error) {
                console.log(error);
            }
        }
        apiProdutos()
    } , [limite , produtos])


    async function carregarProdutosApi(e) {
        if(limite <= limitProduct) {
            e.preventDefault();
            setLimite(limite + 8); 
        } else {
            e.preventDefault();
            setMensagem(true);
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
              {mensagem && <p className='max-products'>Não há mais produtos para listar</p>}
              <button id="carregar-produtos-api" onClick={carregarProdutosApi}>Ainda mais produto aqui!</button>
            </section>
        </section>
    )

}

export default SelecaoEspecial