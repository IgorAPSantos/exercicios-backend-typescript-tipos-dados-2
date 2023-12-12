export { }

const { lerArquivo, escreverArquivo } = require('../01/fs')

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

const usuario1: Usuario = {
    nome: 'Igor',
    email: 'igor@email.com',
    cpf: '123456789100',
    endereco: null

}
const usuario2: Usuario = {
    nome: 'Guido',
    email: 'guido@email.com',
    cpf: '123456789101',
    endereco: null

}
const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bD = lerArquivo() as Usuario[]
    bD.push(dados)
    escreverArquivo(bD)
    return dados
}
// cadastrarUsuario(usuario2)
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

atualizarUsuario('123456789100', usuario2)