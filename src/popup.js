// import { availableFontFamilies, loadHeadLinks } from './preLoad'

loadHeadLinks()

// load the `select` control
const setupSelect = () => {
  let selectControl = document.getElementById('select')
  availableFontFamilies.forEach(font => {
    let o = document.createElement('option')
    o.value = font
    o.innerText = font
    o.style.fontFamily = font
    selectControl.appendChild(o)
  })

  // set current font
  chrome?.storage?.sync?.get('font', function ({ font }) {
    let curFont = font ?? availableFontFamilies[0]
    selectControl.value = curFont
    selectControl.style.fontFamily = curFont
  });
  selectControl.addEventListener('change', (e) => {
    selectControl.style.fontFamily = e.target.value
    chrome?.storage?.sync?.set({ font: e.target.value })
  })
}

const setupToggle = (toggleId, varName) => {
  let toggle = document.getElementById(toggleId)
  chrome?.storage?.sync?.get(varName, function ({ [varName]: enabled }) {
    toggle.checked = enabled ?? true
  })
  toggle.addEventListener('change', (e) => {
    chrome?.storage?.sync?.set({ [varName]: e.target.checked })
  })
}

const setupRefreshBtn = () => {
  let btn = document.getElementById('refresh')
  btn.addEventListener('click', () => {
    chrome.tabs.reload()
  })
}

setupSelect()
setupToggle('toggle-text', 'toggleTextStyle')
setupToggle('toggle-svg', 'toggleSvgStyle')
setupRefreshBtn()