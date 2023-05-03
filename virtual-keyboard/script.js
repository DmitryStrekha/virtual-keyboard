const wrapper = document.createElement('main')
wrapper.classList.add('wrapper')
wrapper.innerHTML =
  '<textarea class="textarea"></textarea>' +
  '<div class="keyboard">' +
  '<div data-code="Backquote" class="key multikey dark"><span class="show"><span>`</span><span class="upper">~</span></span><span><span>Ё</span></span></div>' +
  '<div data-code="Digit1" class="key doubled"><span>1</span><span class="upper">!</span></div>' +
  '<div data-code="Digit2" class="key doubled"><span>2</span><span class="upper">@</span></div>' +
  '<div data-code="Digit3" class="key doubled"><span>3</span><span class="upper">#</span></div>' +
  '<div data-code="Digit4" class="key doubled"><span>4</span><span class="upper">$</span></div>' +
  '<div data-code="Digit5" class="key doubled"><span>5</span><span class="upper">%</span></div>' +
  '<div data-code="Digit6" class="key doubled"><span>6</span><span class="upper">^</span></div>' +
  '<div data-code="Digit7" class="key doubled"><span>7</span><span class="upper">&</span></div>' +
  '<div data-code="Digit8" class="key doubled"><span>8</span><span class="upper">*</span></div>' +
  '<div data-code="Digit9" class="key doubled"><span>9</span><span class="upper">(</span></div>' +
  '<div data-code="Digit0" class="key doubled"><span>0</span><span class="upper">)</span></div>' +
  '<div data-code="Minus" class="key doubled"><span>-</span><span class="upper">_</span></div>' +
  '<div data-code="Equal" class="key doubled"><span>=</span><span class="upper">+</span></div>' +
  '<div data-code="Backspace" class="key wide dark">Backspace</div>' +
  '<div data-code="Tab" class="key wide dark">Tab ⭾</div>' +
  '<div data-code="KeyQ" class="key letter"><span class="show">Q</span><span>Й</span></div>' +
  '<div data-code="KeyW" class="key letter"><span class="show">W</span><span>Ц</span></div>' +
  '<div data-code="KeyE" class="key letter"><span class="show">E</span><span>У</span></div>' +
  '<div data-code="KeyR" class="key letter"><span class="show">R</span><span>К</span></div>' +
  '<div data-code="KeyT" class="key letter"><span class="show">T</span><span>Е</span></div>' +
  '<div data-code="KeyY" class="key letter"><span class="show">Y</span><span>Н</span></div>' +
  '<div data-code="KeyU" class="key letter"><span class="show">U</span><span>Г</span></div>' +
  '<div data-code="KeyI" class="key letter"><span class="show">I</span><span>Ш</span></div>' +
  '<div data-code="KeyO" class="key letter"><span class="show">O</span><span>Щ</span></div>' +
  '<div data-code="KeyP" class="key letter"><span class="show">P</span><span>З</span></div>' +
  '<div data-code="BracketLeft" class="key multikey"><span class="show"><span>[</span><span class="upper">{</span></span><span><span>Х</span></span></div>' +
  '<div data-code="BracketRight" class="key multikey"><span class="show"><span>]</span><span class="upper">}</span></span><span><span>Ъ</span></span></div>' +
  '<div data-code="Delete" class="key dark">Del</div>' +
  '<div data-code="CapsLock" class="key wide dark">Caps Lock</div>' +
  '<div data-code="KeyA" class="key letter"><span class="show">A</span><span>Ф</span></div>' +
  '<div data-code="KeyS" class="key letter"><span class="show">S</span><span>Ы</span></div>' +
  '<div data-code="KeyD" class="key letter"><span class="show">D</span><span>В</span></div>' +
  '<div data-code="KeyF" class="key letter"><span class="show">F</span><span>А</span></div>' +
  '<div data-code="KeyG" class="key letter"><span class="show">G</span><span>П</span></div>' +
  '<div data-code="KeyH" class="key letter"><span class="show">H</span><span>Р</span></div>' +
  '<div data-code="KeyJ" class="key letter"><span class="show">J</span><span>О</span></div>' +
  '<div data-code="KeyK" class="key letter"><span class="show">K</span><span>Л</span></div>' +
  '<div data-code="KeyL" class="key letter"><span class="show">L</span><span>Д</span></div>' +
  '<div data-code="Semicolon" class="key multikey"><span class="show"><span>;</span><span class="upper">:</span></span><span><span>Ж</span></span></div>' +
  '<div data-code="Quote" class="key multikey"><span class="show"><span>\'</span><span class="upper">"</span></span><span><span>Э</span></span></div>' +
  '<div data-code="Enter" class="key wide dark">Enter</div>' +
  '<div data-code="ShiftLeft" class="key wide dark">Shift ⇧</div>' +
  '<div data-code="Backslash" class="key multikey"><span class="show"><span>\\</span><span class="upper">|</span></span><span><span>\\</span><span class="upper">/</span></span></div>' +
  '<div data-code="KeyZ" class="key letter"><span class="show">Z</span><span>Я</span></div>' +
  '<div data-code="KeyX" class="key letter"><span class="show">X</span><span>Ч</span></div>' +
  '<div data-code="KeyC" class="key letter"><span class="show">C</span><span>С</span></div>' +
  '<div data-code="KeyV" class="key letter"><span class="show">V</span><span>М</span></div>' +
  '<div data-code="KeyB" class="key letter"><span class="show">B</span><span>И</span></div>' +
  '<div data-code="KeyN" class="key letter"><span class="show">N</span><span>Т</span></div>' +
  '<div data-code="KeyM" class="key letter"><span class="show">M</span><span>Ь</span></div>' +
  '<div data-code="Comma" class="key multikey"><span class="show"><span>,</span><span class="upper">&lt;</span></span><span><span>Б</span></span></div>' +
  '<div data-code="Period" class="key multikey"><span class="show"><span>.</span><span class="upper">&gt;</span></span><span><span>Ю</span></span></div>' +
  '<div data-code="Slash" class="key multikey"><span class="show"><span>/</span><span class="upper">?</span></span><span><span>.</span><span class="upper">,</span></span></div>' +
  '<div data-code="ArrowUp" class="key symbol dark">▲</div>' +
  '<div data-code="ShiftRight" class="key dark">⇧</div>' +
  '<div data-code="ControlLeft" class="key dark">Ctrl</div>' +
  '<div data-code="MetaLeft" class="key dark">⊞</div>' +
  '<div data-code="AltLeft" class="key dark">Alt</div>' +
  '<div data-code="Space" class="key symbol ultra-wide"> </div>' +
  '<div data-code="AltRight" class="key dark">Alt</div>' +
  '<div data-code="ControlRight" class="key dark">Ctrl</div>' +
  '<div data-code="ArrowLeft" class="key symbol dark">◀</div>' +
  '<div data-code="ArrowDown" class="key symbol dark">▼</div>' +
  '<div data-code="ArrowRight" class="key symbol dark">▶</div>' +
  '</div>' +
  '<p class="notation">Keyboard was made on Windows. Use <span>Alt + Shift</span> to switch language. Click <span>Shift</span> to make next letter in upper case.'
document.body.prepend(wrapper)

const TEXTAREA = document.getElementsByTagName('textarea')[0]
const KEYS = document.getElementsByClassName('key')
const DOUBLED = document.getElementsByClassName('doubled')
const LETTERS = document.getElementsByClassName('letter')
const SYMBOLS = document.getElementsByClassName('symbol')
const MULTIKEYS = document.getElementsByClassName('multikey')

let isRU
if (document.cookie.slice(5) === '') {
  isRU = 0
} else {
  isRU = document.cookie.slice(5)
}
function setLanguage () {
  if (isRU % 2) {
    for (const letter of LETTERS) {
      letter.children[0]?.classList.remove('show')
      letter.children[1]?.classList.add('show')
    }
    for (const multikey of MULTIKEYS) {
      multikey.children[0]?.classList.remove('show')
      multikey.children[1]?.classList.add('show')
    }
  } else {
    for (const letter of LETTERS) {
      letter.children[0]?.classList.add('show')
      letter.children[1]?.classList.remove('show')
    }
    for (const multikey of MULTIKEYS) {
      multikey.children[0]?.classList.add('show')
      multikey.children[1]?.classList.remove('show')
    }
  }
}
setLanguage()

let isCaps = 0
function toUpperRegister () {
  return (isCaps % 2)
}

let isShift = 0
function letterToUpper () {
  return isShift
}

document.addEventListener('keydown', e => {
  TEXTAREA.focus()
  for (const letter of LETTERS) {
    if (e.code === letter.getAttribute('data-code')) {
      e.preventDefault()
      if (toUpperRegister() || letterToUpper() || e.shiftKey) {
        TEXTAREA.value += letter.innerText.toUpperCase()
      } else {
        TEXTAREA.value += letter.innerText.toLowerCase()
      }
    }
  }
  for (const multikey of MULTIKEYS) {
    if (e.code === multikey.getAttribute('data-code')) {
      e.preventDefault()
      if (isRU % 2) {
        if (multikey.children[1].children[1] === undefined) {
          if (toUpperRegister() || letterToUpper() || e.shiftKey) {
            TEXTAREA.value += multikey.children[1].children[0].innerText
          } else {
            TEXTAREA.value += multikey.children[1].children[0].innerText.toLowerCase()
          }
        } else {
          if (letterToUpper() || e.shiftKey) {
            TEXTAREA.value += multikey.children[1].children[1].innerText
          } else {
            TEXTAREA.value += multikey.children[1].children[0].innerText
          }
        }
      } else {
        if (letterToUpper() || e.shiftKey) {
          TEXTAREA.value += multikey.children[0].children[1].innerText
        } else {
          TEXTAREA.value += multikey.children[0].children[0].innerText
        }
      }
      isShift = 0
    }
  }
  if (e.code === 'Tab') TEXTAREA.value += '    '
  if (e.code === 'CapsLock') isCaps++
  if (e.altKey || e.code === 'Tab') e.preventDefault()
  if (e.shiftKey && e.altKey) {
    isRU++
    document.cookie = `isRU=${isRU}`
    setLanguage()
  }
  for (const key of KEYS) {
    if (e.code === key.getAttribute('data-code')) {
      key.style.opacity = '0.6'
      key.style.boxShadow = 'none'
      key.style.color = '#fff'
    }
  }
})

document.addEventListener('keyup', e => {
  for (const key of KEYS) {
    if (key.getAttribute('data-code') === e.code) {
      key.style.opacity = ''
      key.style.boxShadow = ''
      key.style.color = ''
    }
  }
})

// Keys
for (const key of KEYS) {
  key.addEventListener('click', () => {
    TEXTAREA.focus()
  })
}

// Symbols
for (const symbol of SYMBOLS) {
  symbol.addEventListener('click', () => {
    TEXTAREA.value += symbol.innerHTML
  })
}

// Letters
for (const letter of LETTERS) {
  letter.addEventListener('click', () => {
    if (toUpperRegister() || letterToUpper()) {
      TEXTAREA.value += letter.innerText
    } else {
      TEXTAREA.value += letter.innerText.toLowerCase()
    }
    isShift = 0
  })
}

// Doubled
for (const d of DOUBLED) {
  d.addEventListener('click', () => {
    if (counter) {
      TEXTAREA.value += d.children[1].innerText
    } else {
      TEXTAREA.value += d.children[0].innerText
    }
  })
}

// Backspace
document.querySelector('.key[data-code="Backspace"]').addEventListener('click', () => {
  TEXTAREA.value = TEXTAREA.value.slice(0, -1)
})

// Tab
document.querySelector('.key[data-code="Tab"]').addEventListener('click', () => {
  TEXTAREA.value += '    '
})

// Enter
document.querySelector('.key[data-code="Enter"]').addEventListener('click', () => {
  TEXTAREA.value += '\n'
})

// CapsLock
document.querySelector('.key[data-code="CapsLock"]').addEventListener('click', () => {
  isCaps++
})

// ShiftLeft & ShiftRight

let counter = 0
document.querySelector('.key[data-code="ShiftLeft"]').addEventListener('mousedown', () => {
  counter = 1

  for (const d of DOUBLED) {
    d.children[1].classList.remove('upper')
    d.children[0].classList.add('disabled')
  }
})
document.querySelector('.key[data-code="ShiftLeft"]').addEventListener('click', () => {
  isShift = 1
  counter = 0
  for (const d of DOUBLED) {
    d.children[0].classList.remove('disabled')
    d.children[1].classList.add('upper')
  }
})
for (const multikey of MULTIKEYS) {
  multikey.addEventListener('click', () => {
    if (isRU % 2) {
      if (multikey.children[1].children[1] === undefined) {
        if (toUpperRegister() || letterToUpper()) {
          TEXTAREA.value += multikey.children[1].children[0].innerText
        } else {
          TEXTAREA.value += multikey.children[1].children[0].innerText.toLowerCase()
        }
      } else {
        if (letterToUpper()) {
          TEXTAREA.value += multikey.children[1].children[1].innerText
        } else {
          TEXTAREA.value += multikey.children[1].children[0].innerText
        }
      }
    } else {
      if (letterToUpper()) {
        TEXTAREA.value += multikey.children[0].children[1].innerText
      } else {
        TEXTAREA.value += multikey.children[0].children[0].innerText
      }
    }
    isShift = 0
  })
}
