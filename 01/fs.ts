const fs = require('fs/promises')

const lerArquivo = async (path: string): Promise<unknown> => {
    try {
        const arquivo = JSON.parse(await fs.readFile(path)) as unknown
        return console.log(arquivo);

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

const escreverArquivo = async (path: string, conteudo: any): Promise<void> => {
    try {
        conteudo = JSON.stringify(conteudo)
        await fs.writeFile(path, conteudo)

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