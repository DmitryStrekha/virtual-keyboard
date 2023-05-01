const wrapper = document.createElement('main')
wrapper.classList.add('wrapper')
wrapper.innerHTML =
  '<textarea class="textarea"></textarea>' +
  '<div class="keyboard">' +
  '<div data-code="Backquote" class="key doubled dark"><span class="upper">~</span><span>`</span></div>' +
  '<div data-code="Digit1" class="key doubled"><span class = "upper">!</span><span>1</span></div>' +
  '<div data-code="Digit2" class="key doubled"><span class="upper">@</span><span>2</span></div>' +
  '<div data-code="Digit3" class="key doubled"><span class="upper">#</span><span>3</span></div>' +
  '<div data-code="Digit4" class="key doubled"><span class="upper">$</span><span>4</span></div>' +
  '<div data-code="Digit5" class="key doubled"><span class="upper">%</span><span>5</span></div>' +
  '<div data-code="Digit6" class="key doubled"><span class="upper">^</span><span>6</span></div>' +
  '<div data-code="Digit7" class="key doubled"><span class="upper">&</span><span>7</span></div>' +
  '<div data-code="Digit8" class="key doubled"><span class="upper">*</span><span>8</span></div>' +
  '<div data-code="Digit9" class="key doubled"><span class="upper">(</span><span>9</span></div>' +
  '<div data-code="Digit0" class="key doubled"><span class="upper">)</span><span>0</span></div>' +
  '<div data-code="Minus" class="key doubled"><span class="upper">_</span><span>-</span></div>' +
  '<div data-code="Equal" class="key doubled"><span class="upper">+</span><span>=</span></div>' +
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
  '<div data-code="BracketLeft" class="key symbol">[</div>' +
  '<div data-code="BracketRight" class="key symbol">]</div>' +
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
  '<div data-code="Semicolon" class="key symbol">;</div>' +
  '<div data-code="Quote" class="key symbol">\'</div>' +
  '<div data-code="Enter" class="key wide dark">Enter</div>' +
  '<div data-code="ShiftLeft" class="key wide dark">Shift ⇧</div>' +
  '<div data-code="Backslash" class="key symbol">\\</div>' +
  '<div data-code="KeyZ" class="key letter"><span class="show">Z</span><span>Я</span></div>' +
  '<div data-code="KeyX" class="key letter"><span class="show">X</span><span>Ч</span></div>' +
  '<div data-code="KeyC" class="key letter"><span class="show">C</span><span>С</span></div>' +
  '<div data-code="KeyV" class="key letter"><span class="show">V</span><span>М</span></div>' +
  '<div data-code="KeyB" class="key letter"><span class="show">B</span><span>И</span></div>' +
  '<div data-code="KeyN" class="key letter"><span class="show">N</span><span>Т</span></div>' +
  '<div data-code="KeyM" class="key letter"><span class="show">M</span><span>Ь</span></div>' +
  '<div data-code="Comma" class="key symbol">,</div>' +
  '<div data-code="Period" class="key symbol">.</div>' +
  '<div data-code="Slash" class="key symbol">/</div>' +
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
  '<p class="notation">Keyboard was made on Windows. Use <span>Alt + Shift</span> to switch language.'
document.body.prepend(wrapper)

const TEXTAREA = document.getElementsByTagName('textarea')[0]
const KEYS = document.getElementsByClassName('key')
const DOUBLED = document.getElementsByClassName('doubled')
const LETTERS = document.getElementsByClassName('letter')
const SYMBOLS = document.getElementsByClassName('symbol')

let isRU = 0
function setLanguage() {
  if (isRU % 2) {
    for (const letter of LETTERS) {
      letter.children[0]?.classList.remove('show')
      letter.children[1]?.classList.add('show')
    }
  } else {
    for (const letter of LETTERS) {
      letter.children[0]?.classList.add('show')
      letter.children[1]?.classList.remove('show')
    }
  }
}

let isCaps
if (document.cookie.slice(7) === '') {
  isCaps = 0
} else {
  isCaps = document.cookie.slice(7)
}
function toUpperRegister() {
  return (isCaps % 2)
}

document.addEventListener('keydown', e => {
  for (const letter of LETTERS) {
    if (e.code === letter.getAttribute('data-code')) {
      e.preventDefault()
      if (toUpperRegister()) {
        TEXTAREA.value += letter.innerText.toUpperCase()
      } else {
        if (e.shiftKey) {
          TEXTAREA.value += letter.innerText.toUpperCase()
        } else {
          TEXTAREA.value += letter.innerText.toLowerCase()
        }
      }
    }
  }
  if (e.code === 'CapsLock') {
    isCaps++
    document.cookie = `isCaps=${isCaps}`
  };
  if (e.code === 'CapsLock') isCaps++
  if (e.altKey || e.code === 'Tab') e.preventDefault()
  for (const key of KEYS) {
    if (key.getAttribute('data-code') === e.code) {
      key.style.opacity = '0.6'
      key.style.boxShadow = '10px 5px 5px black'
      key.style.color = 'black'
    }
  }
  if (e.shiftKey && e.altKey) {
    isRU++
    setLanguage()
  }
  for (const doubled of DOUBLED) {
    doubled.addEventListener('click', () => {
      return true
    })
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
    if (toUpperRegister()) {
      TEXTAREA.value += letter.innerText
    } else {
      TEXTAREA.value += letter.innerText.toLowerCase()
    }
  })
}

// Backspace
document.querySelector('.key[data-code="Backspace"]').addEventListener('click', () => {
  TEXTAREA.value = TEXTAREA.value.slice(0, -1)
})

// Tab
document.querySelector('.key[data-code="Tab"]').addEventListener('click', () => {
  TEXTAREA.value += '  '
})

// Enter
document.querySelector('.key[data-code="Enter"]').addEventListener('click', () => {
  TEXTAREA.value += '\n'
})

// CapsLock
document.querySelector('.key[data-code="CapsLock"]').addEventListener('click', () => {
  isCaps++
  document.cookie = `isCaps=${isCaps}`
})
// Shift
const a = document.querySelector('.key[data-code="ShiftLeft"]')
a.addEventListener('mousedown', function () {
  a.classList.toggle('activated')
  for (const d of DOUBLED) {
    d.children[0].classList.remove('upper')
    d.children[1].classList.add('disabled')
    d.addEventListener('click', () => {
      TEXTAREA.value += d.children[0].innerHTML
    }, { once: true })
  }
}, { once: true })
document.querySelector('.key[data-code="ShiftLeft"]').addEventListener('mouseup', () => {
  a.classList.remove('activated')
  for (const d of DOUBLED) {
    d.children[1].classList.remove('disabled')
    d.children[0].classList.add('upper')
    d.addEventListener('click', () => {
      TEXTAREA.value += d.children[1].innerHTML
    })
  }
  console.log('mouseup')
})
