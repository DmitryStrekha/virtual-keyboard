const keys = {
    en: {
        Backquote: '`',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Digit0: '0',
        Minus: '-',
        Equal: '=',
        Backspace: 'backspace',
        Tab: 'Tab',
        KeyQ: 'q',
        KeyW: 'w',
        KeyE: 'e',
        KeyR: 'r',
        KeyT: 't',
        KeyY: 'y',
        KeyU: 'u',
        KeyI: 'i',
        KeyO: 'o',
        KeyP: 'p',
        BracketLeft: '[',
        BracketRight: ']',
        Backslash: '\\',
        Delete: 'Delete',
        CapsLock: 'CapsLk',
        KeyA: 'a',
        KeyS: 's',
        KeyD: 'd',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        Semicolon: ';',
        Quote: "'",
        Enter: 'Enter',
        ShiftLeft: 'Shift',
        KeyZ: 'z',
        KeyX: 'x',
        KeyC: 'c',
        KeyV: 'v',
        KeyB: 'b',
        KeyN: 'n',
        KeyM: 'm',
        Comma: ',',
        Period: '.',
        Slash: '/',

        ArrowUp: 'arrowup',
        ShiftRight: 'Shift ',
        ControlLeft: 'Ctrl',
        MetaLeft: 'win',
        AltLeft: 'alt',
        Space: 'space',
        AltRight: 'alt',
        ControlRight: 'Ctrl',
        ArrowLeft: 'arrowleft',
        ArrowDown: 'arrowdown',
        ArrowRight: 'arrowright',
    },
    ru: {
        Backquote: 'ё',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Digit0: '0',
        Minus: '-',
        Equal: '=',
        Backspace: 'backspace',
        Tab: 'Tab',
        KeyQ: 'й',
        KeyW: 'ц',
        KeyE: 'у',
        KeyR: 'к',
        KeyT: 'е',
        KeyY: 'н',
        KeyU: 'г',
        KeyI: 'ш',
        KeyO: 'щ',
        KeyP: 'з',
        BracketLeft: 'х',
        BracketRight: 'ъ',
        Backslash: '\\',
        CapsLock: 'CapsLk',
        KeyA: 'ф',
        KeyS: 'ы',
        KeyD: 'в',
        KeyF: 'а',
        KeyG: 'п',
        KeyH: 'р',
        KeyJ: 'о',
        KeyK: 'л',
        KeyL: 'д',
        Semicolon: 'ж',
        Quote: 'э',
        Enter: 'Enter',
        ShiftLeft: 'Shift',
        KeyZ: 'я',
        KeyX: 'ч',
        KeyC: 'с',
        KeyV: 'м',
        KeyB: 'и',
        KeyN: 'т',
        KeyM: 'ь',
        Comma: 'б',
        Period: 'ю',
        Slash: '.',
        ArrowUp: 'arrowup',
        ShiftRight: 'Shift ',
        ControlLeft: 'Ctrl',
        MetaLeft: 'win',
        AltLeft: 'alt',
        Space: 'space',
        AltRight: 'alt',
        ControlRight: 'Ctrl',
        ArrowLeft: 'arrowleft',
        ArrowDown: 'arrowdown',
        ArrowRight: 'arrowright',
    },
};

const specKeys = {
    en: {
        Backquote: '~',
        Digit1: '!',
        Digit2: '@',
        Digit3: '#',
        Digit4: '$',
        Digit5: '%',
        Digit6: '^',
        Digit7: '&',
        Digit8: '*',
        Digit9: '(',
        Digit0: ')',
        Minus: '_',
        Equal: '+',
        BracketLeft: '{',
        BracketRight: '}',
        Backslash: '|',
        Semicolon: ':',
        Quote: '"',
        Comma: '<',
        Period: '>',
        Slash: '?',
    },
    ru: {
        Backquote: 'Ё',
        Digit1: '!',
        Digit2: '"',
        Digit3: '№',
        Digit4: ';',
        Digit5: '%',
        Digit6: ':',
        Digit7: '?',
        Digit8: '*',
        Digit9: '(',
        Digit0: ')',
        Minus: '_',
        Equal: '+',
        BracketLeft: 'Х',
        BracketRight: 'Ъ',
        Backslash: '/',
        Semicolon: 'Ж',
        Quote: 'Э',
        Comma: 'Б',
        Period: 'Ю',
        Slash: ',',
    },
};

const specialKeys = {
    specialKey: [
        'Tab',
        'CapsLock',
        'ShiftLeft',
        'ShiftRight',
        'MetaLeft',
        'AltLeft',
        'AltRight',
        'Space',
        'ControlLeft',
        'ControlRight',
        'Enter',
        'Delete',
        'Backspace',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
    ],
};
class Board {
    constructor() {
        this.keys = null;
    }
    createElement() {

        const header = document.createElement('header');
        header.classList.add('header')
        const h1 = document.createElement('h1')
        h1.classList.add('h1-text')
        h1.textContent = 'Virtyal Keyboard'
        document.body.prepend(header)
        header.append(h1)

        const wrapper = document.createElement('main')
        wrapper.classList.add('wrapper')
        const wrapperContent = document.createElement('div')
        wrapperContent.classList.add('wrapper-content')
        document.body.append(wrapper)
        header.after(wrapper)
        wrapper.append(wrapperContent)

        const textareaBlock = document.createElement('div')
        textareaBlock.classList.add('textar-block')
        const textarea = document.createElement('textarea')
        textarea.classList.add('text-area')
        textareaBlock.append(textarea)

        const keyBlock = document.createElement('div')
        keyBlock.classList.add('key-block')
        const keyboard = document.createElement('div')
        keyboard.classList.add('keyboard')
        keyBlock.append(keyboard)

        const message = document.createElement('div')
        message.classList.add('message')
        const span = document.createElement('span')
        span.textContent = 'The keyboard is made for the OS Windows'
        const span1 = document.createElement('span')
        span1.textContent = 'Language (Click on the language icon or press on the keyboard "Alt + Shift")'
        message.append(span, span1)
        wrapperContent.append(textareaBlock, keyBlock, message)
        this.keys = document.createElement('div');
        this.keys.classList.add('board-keys');
        keyboard.append(this.keyss(keys.en))

        // document.addEventListener('keydown', function (event) {
        //     if (event.altKey && event.shiftKey) {
        //         console.log(1)
        //         keyboard.append(this.keyss(keys.ru))
        //     } else {
        //         ;
        //     }
        // });
    }

    keyss(obj) {
        Object.getOwnPropertyNames(obj).forEach((bK) => {
            const boardKey = document.createElement('button')
            boardKey.classList.add('board-key')
            boardKey.setAttribute('board-key-code', `${bK}`)
            const mainText = document.createElement('span');
            mainText.classList.add('keyboard__key-main');
            boardKey.append(mainText)
            mainText.textContent = obj[bK];

            if (obj[bK] === 'backspace') {
                boardKey.style.flexBasis = '12%';
            } else if (obj[bK] === 'Enter') {
                boardKey.style.flexBasis = '12%';
            } else if (obj[bK] === 'Shift') {
                boardKey.style.flexBasis = '16%';
            } else if (obj[bK] === '/') {
                boardKey.style.flexBasis = '9%';
            } else if (obj[bK] === 'space') {
                boardKey.style.flexBasis = '40%';
            } else if (obj[bK] === 'CapsLk') {
                boardKey.style.flexBasis = '12%';
            } else if (obj[bK] === 'Ctrl') {
                boardKey.style.flexBasis = '9%';
            } else if (obj[bK] === 'arrowup') {
                mainText.textContent = '';
                boardKey.classList.add('arrow-up');
            } else if (obj[bK] === 'arrowdown') {
                mainText.textContent = '';
                boardKey.classList.add('arrow-down');
            } else if (obj[bK] === 'arrowleft') {
                mainText.textContent = '';
                boardKey.classList.add('arrow-left');
            } else if (obj[bK] === 'arrowright') {
                mainText.textContent = '';
                boardKey.classList.add('arrow-right');
            } else if (obj[bK] === 'Tab') {
                boardKey.style.flexBasis = '8%';
            }

            Object.getOwnPropertyNames(specKeys.en).forEach((bk2) => {
                if (bk2 === bK) {
                    const auxText = document.createElement('span');
                    auxText.classList.add('board-key-aux');
                    boardKey.classList.add('board-key-special');
                    auxText.textContent = specKeys.en[bk2];
                    boardKey.append(auxText);
                }
            });
            this.keys.append(boardKey);

        })
        return this.keys;
    }

}
const wrapper = new Board();
wrapper.createElement();
