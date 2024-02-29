import { esquemaValidacao , valoresIniciais } from "./Validacao"
import { Field , Form , Formik  , ErrorMessage} from "formik"

const error = (message) => {
    return <p className="error">{message}</p>
}

const handleSubmit = (values) => {
     console.log(values)
}

function FormularioCadastro() {

    return (
        <section className="form-register">
            
            <Formik
                initialValues={valoresIniciais}
                validationSchema={esquemaValidacao}  
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="nome">Seu nome: </label>
                    <Field
                        name = 'nome'
                        placeholder="Nome"
                        type="text"
                        id="nome"
                        autoComplete="nome"
                    />

                    <ErrorMessage name="nome" render={error}/>
                    
                    <label htmlFor="email">Email:  </label>
                    <Field 
                        name = 'email'
                        placeholder="Email"
                        type="email"
                        id="email"
                        autoComplete="email"
                    />
                    <ErrorMessage name="email" render={error}/>

                    <label htmlFor="cpf">CPF: </label>  
                    <Field
                        name = "cpf"
                        placeholder="CPF"
                        maxLength={14}
                        id="cpf"
                        type="text"
                        autoComplete="off"
                    />
                    <ErrorMessage name="cpf" render={error}/>

                    <Field
                        type="radio"
                        name="genero"
                        id="M"
                        value = "masculino"
                    />
                    <label className="genderM" htmlFor="M">Masculino</label>

                    <Field
                        type="radio"
                        name="genero"
                        id="F"
                        value = "feminino"
                    />
                    <label className="genderF" htmlFor="F">Feminino</label>

                    <ErrorMessage name="genero" render={error}/>

                    <button type="submit">Submit</button>
                </Form>
           </Formik>
        
       </section>

    )
}

export default FormularioCadastro

