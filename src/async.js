function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++
    }
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoes++
        }
        resolve(execucoes);
    } catch {
        reject("Deu erro!")
    }
})


// console.log(funcaoMuitoPesada());

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {resolve(`Logado com ${loogin}`);}
            catch{reject('erro')}
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log|("Início");
    // funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)); 
    promiseComParametros("Matheus", "123456").then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }
    console.log("Fim");
}

execucaoPrincipal();

