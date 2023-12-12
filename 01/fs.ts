const fs = require('fs')

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'))
}

const escreverArquivo = (conteudo: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(conteudo))
}

// const fs = require('fs/promises')

// const lerArquivo = async (): Promise<unknown> => {
//     return JSON.parse(await fs.readFile('../bd.json'))
// }

// const escreverArquivo = async (conteudo: any): Promise<void> => {
//     await fs.writeFile('../bd.json', JSON.stringify(conteudo))
// }

module.exports = {
    lerArquivo,
    escreverArquivo
}
