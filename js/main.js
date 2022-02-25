import styleDark from './styleDark.js'

const $style = document.getElementById('darkMode')
const $activeDark = document.getElementById('activeDark')

document.addEventListener('DOMContentLoaded', e => {
  function loadDark() {
    if ($activeDark.checked || localStorage.getItem('darkmode') == 'true') {
      $style.innerHTML = styleDark
      localStorage.setItem('darkmode', true)
      $activeDark.checked = true
    } else {
      $style.innerHTML = ''
    }
  }
  
  $activeDark.addEventListener('click', e => {
    localStorage.setItem('darkmode', false)
    loadDark()
  })

  loadDark()
})