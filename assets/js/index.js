// Fazendo requisições via API usando o metodo fetch e axios

function criaElementos (elemento) {
    return document.createElement(elemento);
}

function append (parent , elemento) {
    return parent.appendChild(elemento);
}

function criaClasse (elemento , classe) {
    return elemento.classList.add(classe);
}

let areaProdutos = document.querySelector('.produtos');  

async function productsApi () {
    await fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')

        .then(resposta => {
            return resposta.json();
        })
        
        .then(dados => {
            console.log(dados);
            let produtos = dados.products;
            
                return produtos.map(function(produtos) {

                    // Criação de tags HTML
                    let sectionCaixa = criaElementos('section');
                    let imagemCaixa = criaElementos('img');
                    let infoProdutos = criaElementos('section');
                    let button = criaElementos('button');
                    let p1 = criaElementos ('p');
                    let p2 = criaElementos ('p');
                    let p3 = criaElementos('p');
                    let p4 = criaElementos ('p');

  
                    // Acrescentar ao filho
                    append(sectionCaixa , imagemCaixa);
                    append(areaProdutos , sectionCaixa);
                    append(areaProdutos , infoProdutos);
                    append(infoProdutos , p1);
                    append(infoProdutos , p2);
                    append(infoProdutos , p3);
                    append(infoProdutos , p4);
                    append(infoProdutos , button);
            
    
                     // Criar classes para os elementos HTMl
                    criaClasse(sectionCaixa , 'caixa-vazia');
                    criaClasse(infoProdutos , 'info-produtos');
                    criaClasse(sectionCaixa , 'info-produtos');
                    criaClasse(p1 , 'nome' );
                    criaClasse(p2 , 'preco' );
                    criaClasse(p3 , 'promocao');
                    criaClasse(p4 , 'valor-parcelado');
                    
                    // Adicionar o conteudo ao elemento
                    p1.innerHTML = produtos.name;
                    p2.innerHTML = `De: R$${produtos.oldPrice}`;
                    p3.innerHTML = `Por: R$${produtos.price}`;
                    p4.innerHTML = `ou R$${produtos.installments.count} de: R$${produtos.installments.value}`
                    button.innerHTML = 'Comprar';

                    const moreProductsButton = document.querySelector('#moreProductsButton');

                    moreProductsButton.addEventListener('click' , () => {
                        moreProductsButton.disabled = true;
                    })
             })
    })

    .catch (error => {
        return console.log(error);
    })

}

productsApi();

async function moreProductsApi (e) {
    e.preventDefault();
    
   await fetch ('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2')

    .then(response => {
        console.log(response);
        return response.json();
    }) 

     .then(dados => {
        console.log(dados);
        let moreAddProdcuts = dados.products;

        return moreAddProdcuts.map(produtos =>{

                    // Criaçaõ de tags HTML
                    let sectionCaixa = criaElementos('section');
                    let imagemCaixa = criaElementos('img');
                    let infoProdutos = criaElementos('section');
                    let p1 = criaElementos('p');
                    let p2 = criaElementos ('p');
                    let p3 = criaElementos('p');
                    let p4 = criaElementos ('p');
                    let button = criaElementos('button');
                
                    // Acrescentar ao filho
                    append(areaProdutos , sectionCaixa);
                    append(sectionCaixa , imagemCaixa);
                    append(areaProdutos , infoProdutos);
                    append(infoProdutos , p1);
                    append(infoProdutos , p2);
                    append(infoProdutos , p3);
                    append(infoProdutos , p4);
                    append(infoProdutos , button);

                    // Criar classes para os elementos HTMl
                    criaClasse(sectionCaixa , 'caixa-vazia');
                    criaClasse(infoProdutos , 'info-produtos');
                    criaClasse(sectionCaixa , 'info-produtos');
                    criaClasse(p1 , 'nome');
                    criaClasse(p2 , 'preco');
                    criaClasse(p3 , 'promocao');
                    criaClasse(p4 , 'valor-parcelado');
            
                    //Adicionar o conteudo {img , texto}
                    p1.innerHTML = produtos.name;
                    p2.innerHTML = `De: R$${produtos.oldPrice}`;
                    p3.innerHTML = `Por: R$${produtos.price}`;
                    p4.innerHTML = `ou R$${produtos.installments.count} de: R$${produtos.installments.value}`
                    button.innerHTML = 'Comprar';
             })
         })
}






