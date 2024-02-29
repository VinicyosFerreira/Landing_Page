import * as Yup from 'yup'

export const esquemaValidacao = Yup.object({
    nome : Yup.string().required('Nome é obrigatório') ,
    email : Yup.string().email("Email inválido").required('Email é obrigatorio') ,
});

