const carroRegistrado = []
const carroLavado = []
const carroEncerado = []
const carroSecado = []
const carroListo = []


const form = document.getElementById('formPrincipal')
form.onsubmit = (e) => {
    e.preventDefault()
    const registro = document.getElementById('placa')
    const registroText = registro.value
    registro.value = ''
    carroRegistrado.push(registroText)
    const placasLi = carroRegistrado.map(e => '<p>' + e + '</p>')
    const registrado = document.getElementById('registrado')
    registrado.innerHTML = placasLi.join('')
}

//Boton lavado con mate clasico o especial
const lavadoClasico = document.getElementById('lavadoClasico')
const lavado = document.getElementById('lavado')
lavadoClasico.addEventListener('click', () => {
    const listaPlacas = document.querySelectorAll('#registrado p')
    listaPlacas.forEach((placa, e) => {
        console.log(placa, e)
        if (e == 0) {
            placa.parentNode.removeChild(placa)
            const elementoLavado = carroRegistrado.splice(e, 1)
            carroLavado.push(elementoLavado[0])
            const lavadoLi = carroLavado.map(e => '<p>' + e + '</p>')
            lavado.innerHTML = lavadoLi.join('')
            console.log(carroLavado)

        }
    })
})
//boton encerado con sally
const enceradoClasico = document.getElementById('enceradoClasico')
const encerado = document.getElementById('encerado')
enceradoClasico.addEventListener('click', () => {
    const listaPlacas = document.querySelectorAll('#lavado p')
    listaPlacas.forEach((placa, e) => {
        console.log(placa, e)
        if (e == 0) {
            placa.parentNode.removeChild(placa)
            const elementoEncerado = carroLavado.splice(e, 1)
            carroEncerado.push(elementoEncerado[0])
            const enceradoLi = carroEncerado.map(e => '<p>' + e + '</p>')
            encerado.innerHTML = enceradoLi.join('')
            console.log(carroEncerado)
        }
    })
})

//boton secado con guido
const secadoClasico = document.getElementById('secadoClasico')
const secado = document.getElementById('secado')
secadoClasico.addEventListener('click', () => {
    const listaPlacas = document.querySelectorAll('#encerado p')
    listaPlacas.forEach((placa, e) => {
        console.log(placa, e)
        if (e == 0) {
            placa.parentNode.removeChild(placa)
            const elementoSecado = carroEncerado.splice(e, 1)
            carroSecado.push(elementoSecado[0])
            const secadoLi = carroSecado.map(e => '<p>' + e + '</p>')
            secado.innerHTML = secadoLi.join('')
            console.log(carroSecado)
        }
    })
})

//carro listo
const writeRecoger = document.getElementById('writeRecoger')
const listo = document.getElementById('listo')
const carrosSalida = () => {
    const listaPlacas = document.querySelectorAll('#secado p')
    listaPlacas.forEach((placa, e) => {
        console.log(placa, e)
        if (e == 0) {
            placa.parentNode.removeChild(placa)
            const elementoListo = carroSecado.splice(e, 1)
            carroListo.push(elementoListo[0])
            const listoLi = carroListo.map(e => '<p>' + e + '</p>')
            listo.innerHTML = listoLi.join('')
            writeRecoger.innerHTML = listoLi[listoLi.length - 1]

            console.log(carroListo)
        }
    })
}
setInterval(carrosSalida, 5000);
//Recoger el carro fin del programa
const recoger = document.getElementById('recoger')
recoger.addEventListener('click', () => {
    const listaPlacas = document.querySelectorAll('#listo p')
    listaPlacas.forEach((placa, e) => {
        console.log(placa, e)
        if (e == 0) {
            placa.parentNode.removeChild(placa)
            carroListo.splice(e, 1)

        }
    })
    if(carroListo.length==0){
    	writeRecoger.innerHTML = '------'
    }
})