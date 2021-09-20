const anoNovo = new Date('1 Jan 2022')

function calcularOTempo(anoNovo) {

    const atual = new Date()
    const milisegundos = (anoNovo - atual) / 1000
    const days = Math.floor(milisegundos / 3600 / 24)
    const hours = Math.floor(milisegundos / 3600) % 24
    const minutes = Math.floor(milisegundos / 60) % 60
    const seconds = Math.floor(milisegundos) % 60
    console.log(hours, minutes, seconds)

    if(milisegundos <= 0) {
        clearInterval(countdon)
    }

    document.querySelector('[data-dia]').innerHTML = formatTime(days)
    document.querySelector('[data-hora]').innerHTML = formatTime(hours)
    document.querySelector('[data-minuto]').innerHTML = formatTime(minutes)
    document.querySelector('[data-segundo]').innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

const countdon = setInterval(() => calcularOTempo(anoNovo), 1000)