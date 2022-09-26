








export default function ChangeTheme (theme = false, setTheme) {

    let r = document.querySelector(':root')

    if (theme) {
        r.style.setProperty('--back', 'black')
        r.style.setProperty('--primary', '#614ccf')
        r.style.setProperty('--priFont', 'rgb(170, 170, 170)')
        r.style.setProperty('--secFont', 'rgba(130, 130, 130, 0.5)')
        r.style.setProperty('--greenDark', 'rgb(25, 120, 35)')
        r.style.setProperty('--greenBright', 'rgba(25, 120, 35, 0.2)')
    }
    else {
        r.style.setProperty('--back', '#ffffff')
        r.style.setProperty('--primary', '#614ccf')
        r.style.setProperty('--priFont', '#525252')
        r.style.setProperty('--secFont', '#bcbcbc')
        r.style.setProperty('--greenDark', '#1e823c')
        r.style.setProperty('--greenBright', '#e2fef0')
    }
    setTheme(!theme)
    // return setTheme()
}