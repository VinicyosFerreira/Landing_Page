import {Formik , Form , Field , ErrorMessage} from 'formik'
import { valoresIniciaisAmigo , esquemaValidacao2} from "./Validacao"


function Compartilhar() {

    const error = (message) => {
        return <p className="error">{message}</p>
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

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
                                     placeholder= "Nome de seu amigo" 
                                     name="nomeAmigo" 
                                     id="nomeAmigo"
                                     autoComplete="name"
                                     />
                                    <ErrorMessage name='nomeAmigo' render={error}/>
                                </div>              

                                <div>
                                    <label htmlFor='email'>Email dele: </label>
                                    <Field 
                                    type="email" 
                                    name="emailAmigo" 
                                    placeholder="Email de seu amigo" 
                                    id="emailAmigo"
                                    autoComplete="email"
                                    />
                                     <ErrorMessage name='emailAmigo' render={error}/>
                                </div>
        

                                <button type="submit" className="botao">Enviar</button>
                            </Form>
                        </Formik>
                </div>
       </section>
    )
}

export default Compartilhar