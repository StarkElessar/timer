// ! Таймер по уроку от [UDemy]:
const deadline = '2022-11-14'

const getZero = (number) => number >= 0 && number < 10 ? `0${number}` : number

function getTimeRemaining(endtime) {
  const t         = Date.parse(endtime) - Date.parse(new Date())
  const days      = Math.floor(t / (1000 * 60 * 60 * 24))
  const hours     = Math.floor((t / (1000 * 60 * 60)) % 24)
  const minutes   = Math.floor((t / 1000 / 60) % 60)
  const seconds   = Math.floor((t / 1000) % 60)
  
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function setClock(selector, endtime) {
  const timer         = document.querySelector(selector)
  const days          = timer.querySelector('.timer__item-days')
  const hours         = timer.querySelector('.timer__item-hours')
  const minutes       = timer.querySelector('.timer__item-minutes')
  const seconds       = timer.querySelector('.timer__item-seconds')
  const timeInterval  = setInterval(updateClock, 1000)
  
  updateClock()

  function updateClock() {
    const t = getTimeRemaining(endtime)

    days.innerHTML = getZero(t.days)
    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

    if (t.total <= 0) clearInterval(timeInterval)
  }
}

window.onload = () => {
  setClock('.timer', deadline)
}
