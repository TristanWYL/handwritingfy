// import { availableFontFamilies, loadHeadLinks } from './prepareFonts'

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

const setupToggle = () => {
  let toggle = document.getElementById('toggle')
  chrome?.storage?.sync?.get('toggle', function ({ toggle: enabled }) {
    toggle.checked = enabled ?? true
  })
  toggle.addEventListener('change', (e) => {
    chrome?.storage?.sync?.set({ toggle: e.target.checked })
  })
}

const setupRefreshBtn = () => {
  let btn = document.getElementById('refresh')
  btn.addEventListener('click', () => {
    chrome.tabs.reload()
  })
}

setupSelect()
setupToggle()
setupRefreshBtn()