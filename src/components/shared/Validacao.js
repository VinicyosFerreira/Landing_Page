import * as Yup from 'yup'

export const esquemaValidacao = Yup.object({
    nome : Yup.string().required('Nome é obrigatório') ,
    email : Yup.string().email("Email inválido").required('Email é obrigatorio') ,
    cpf : 
    Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido')
    .required("CPF é obrigatório") ,
    genero : Yup.string().required('Por favor selecione um gênero').oneOf(["masculino" , "feminino"]) , 
});

export const esquemaValidacao2 = Yup.object({   
    nomeAmigo : Yup.string().required('Nome é obrigatório') ,
    emailAmigo : Yup.string().email("Email inválido").required('Email é obrigatorio')
})

export const valoresIniciais = {
    nome : '' ,
    email : '' ,
    cpf : '' ,
    genero : ''
}

export const valoresIniciaisAmigo = {
    nomeAmigo : '' ,
    emailAmigo : ''
}