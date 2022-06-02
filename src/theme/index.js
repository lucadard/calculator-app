const baseThemeOverrides = {
    styles: {
        global: {
            body: {
                fontFamily: 'League Spartan',
                fontWeight: '700',
                fontSize: '32px',
            }
        }
    },
    colors: {
        bg: {
            main: '#3a4764',
            keypad: '#232c43',
            screen: '#182034',
        },
        key: {
            main: '#eae3dc',
            main_shadow: '#b4a597',
            secondary: '#637097',
            secondary_shadow: '#404e72',
            tertiary: '#d03f2f',
            tertiary_shadow: '#93261a',
        },
        text: {
            logo: '#ffffff',
            screen: '#ffffff',
            main: '#444b5a',
            secondary: '#ffffff',
            tertiary: '#ffffff',
        }
    }
}

const secondThemeColors = {
    bg: {
        main: '#e6e6e6',
        keypad: '#d1cccc',
        screen: '#ededed',
    },
    key: {
        main: '#e5e4e1',
        main_shadow: '#a69d91',
        secondary: '#377f86',
        secondary_shadow: '#1b5f65',
        tertiary: '#ca5502',
        tertiary_shadow: '#893901',
    },
    text: {
        logo: '#35352c',
        screen: '#35352c',
        main: '#35352c',
        secondary: '#ffffff',
        tertiary: '#ffffff',
    }
}

const thirdThemeColors = {
    bg: {
        main: '#160628',
        keypad: '#1d0934',
        screen: '#1d0934',
    },
    key: {
        main: '#341c4f',
        main_shadow: '#871c9c',
        secondary: '#58077d',
        secondary_shadow: '#bc15f4',
        tertiary: '#00e0d1',
        tertiary_shadow: '#6cf9f2',
    },
    text: {
        logo: '#ffe53d',
        screen: '#ffe53d',
        main: '#ffe53d',
        secondary: '#ffffff',
        tertiary: '#1b2428',
    }
}

export { baseThemeOverrides, secondThemeColors, thirdThemeColors };