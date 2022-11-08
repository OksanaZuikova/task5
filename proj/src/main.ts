import * as moment from 'moment'

let num = 5
const numberElement = document.getElementById('number')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
minusButton.addEventListener('click', decreaseTimer)
plusButton.addEventListener('click', increaseTimer)

function decreaseTimer() {
    if (num > 1) {
        num--
        numberElement.innerHTML = '' + num
    }
}

function increaseTimer() {
    num++
    numberElement.innerHTML = '' + num
}

let startButton = document.getElementById('start')
startButton.addEventListener('click', startTimer)

function startTimer() {
    document.getElementById('first').classList.add('none')
    document.getElementById('second').classList.remove('none')
    let now = moment()
    const endTimer = moment(moment().add(+num, 'minutes'))

    let duration = moment.duration(endTimer.diff(now), 'milliseconds')
    console.log(duration)

    const timer = setInterval(showTime, 1000)
    function showTime() {
        duration = moment.duration(
            duration.asMilliseconds() - 1000,
            'milliseconds'
        )
        document.getElementById('time').innerHTML = `${duration.get(
            'minutes'
        )}:${duration.get('seconds')}`
        if (document.getElementById('time').innerHTML == '0:0') {
            clearInterval(timer)
            num = 5
            numberElement.innerHTML = '' + num
            document.getElementById('first').classList.remove('none')
            document.getElementById('second').classList.add('none')
        }
    }
}
