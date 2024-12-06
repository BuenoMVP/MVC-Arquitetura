const concatenaString = (req, res) => {
    let { parametro } = req.query
    
    if(!parametro){
        parametro='Bem-vindo'
    }

    const valor = parametro+` :)`

    res.send(`Ambiente configurado. <br> 
        Para alterar o valor do parâmetro, utilize o modelo ' ?parametro=Insira_seu_valor ' no final da url. <br>
        Parametro original: ${parametro} <br>
        Parametro alterado: ${valor}
    `)
}

module.exports = {concatenaString}