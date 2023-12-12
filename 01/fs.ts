const fs = require('fs/promises')

const lerArquivo = async (): Promise<unknown> => {
    try {
        return JSON.parse(await fs.readFile('./bd.json'))

    } catch (error) {
        if (
            error !== null &&
            typeof error === 'object' &&
            'message' in error &&
            typeof error.message === 'string'
        ) {
            return console.log(error.message);
        }
    }
}

const escreverArquivo = async (conteudo: any): Promise<void> => {
    try {
        conteudo = JSON.stringify(conteudo)
        await fs.writeFile('./bd.json', conteudo)

    } catch (error) {
        if (
            error !== null &&
            typeof error === 'object' &&
            'message' in error &&
            typeof error.message === 'string'
        ) {
            console.log(error.message);
        }
    }

}

module.exports = {
    lerArquivo,
    escreverArquivo
}