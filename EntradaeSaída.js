const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) pegar parâmetros com chamadas através do terminal

if(anonimo) {
    process.stdout.write('fala anonimo')
    process.exit()
} else {
    process.stdout.write('informe seu nome:')
    process.stdin.on('data', data => {
        process.stdout.write(`Fala ${nome}!!!`)
        process.exit()
    })
}