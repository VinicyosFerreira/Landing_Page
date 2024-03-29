import {Formik , Form , Field , ErrorMessage} from 'formik'
import { valoresIniciaisAmigo , esquemaValidacao2} from "./Validacao"

const error = (message) => {
    return <p className="error">{message}</p>
}

const handleSubmit = (values) => {
    console.log(values)
}

function Compartilhar() {
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
                        <Formik 
                            initialValues={valoresIniciaisAmigo}
                            validationSchema={esquemaValidacao2}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <div>
                                    <label htmlFor='nome'>Nome de seu amigo: </label>
                                    <Field 
                                    type="text"
                                    placeholder= 
                                     "Nome de seu amigo" 
                                     name="nomeAmigo" 
                                     id="nome"
                                     autoComplete="nome"
                                     />
                                </div>

                                <ErrorMessage name='nome' render={error}/>

                                <div>
                                    <label htmlFor='email'>Email dele: </label>
                                    <Field 
                                    type="email" 
                                    name="emailAmigo" 
                                    placeholder="Email de seu amigo" 
                                    id="email"
                                    autoComplete="email"
                                    />
                                </div>
        
                                <ErrorMessage name='email' render={error}/>

                                <button type="submit" className="botao">Enviar</button>
                            </Form>
                        </Formik>
                </div>
       </section>
    )
}

export default Compartilhar