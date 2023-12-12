const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'))
}

const escreverArquivo = (conteudo: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(conteudo))
}

type Endereco = {
    cep: string,
    rua: string,
    complementow?: string,
    bairro: string
    cidade: string
}

type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco: Endereco | null
}


const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bD = lerArquivo() as Usuario[]
    bD.push(dados)
    escreverArquivo(bD)
    return dados
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]
}

const atualizarUsuario = (cpf: string, novoUsuario: Usuario): Usuario => {
    const usuarios = lerArquivo() as Usuario[]
    let usuario = usuarios.find(usuario => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }

    Object.assign(usuario, novoUsuario)
    escreverArquivo(usuarios)
    return novoUsuario

}

const detalharUsuario = (cpf: string): Usuario => {
    const listaUsuarios = lerArquivo() as Usuario[]
    const usuario = listaUsuarios.find(usuario => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error('Usuário não encontrado')
    }
    return usuario
}
// const usuario1: Usuario = {
//     nome: 'Igor',
//     email: 'igor@email.com',
//     cpf: '123456789100',
//     endereco: null

// }
// const usuario2: Usuario = {
//     nome: 'Guido',
//     email: 'guido@email.com',
//     cpf: '123456789101',
//     endereco: null

// }