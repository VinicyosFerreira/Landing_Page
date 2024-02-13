function Compartilhar() {

    // shared

    return (
        <section className="share-area">
            <section className="share-area-title">
                <h3>Compartilhe a novidade</h3>
                <hr></hr>
            </section>

            <section>
                <p>Quer que seus amigos também ganhem a lista personalizada</p>
                <p style={{textAlign : "center"}}>deles? Preencha agora!</p>
            </section>            

                <div className="indication">
                        <form>
                            <div>
                                <label>Nome de seu amigo: </label>
                                <input type="text" placeholder= "Nome de seu amigo"name="amigo" id="nomeAmigo"/>
                            </div>
                            <div>
                                <label>Email dele: </label>
                                <input type="email" name="amigo" placeholder="Email de seu amigo" id="emailAmigo"/>
                            </div>
                            <button type="submit" className="botao">Enviar</button>
                        </form>
                </div>
       </section>
    )
}

export default Compartilhar