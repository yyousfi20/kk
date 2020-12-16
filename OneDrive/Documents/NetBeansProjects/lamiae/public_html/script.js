let theme = localStorage.getItem('theme')

if (theme != null) {
    setTheme(theme)
}

handleClick = () => {
    let target = window.event.target.id;
    setTheme(target.replace('-mode', ''))
}
function setTheme(mode) {
    switch (mode) {
        case 'light': document.getElementById('theme-style').href = 'css/style.css';
            break;
        case 'blue': document.getElementById('theme-style').href = 'css/blue.css';
            break;
        case 'green': document.getElementById('theme-style').href = 'css/green.css';
            break;
        case 'purple': document.getElementById('theme-style').href = 'css/purple.css';
            break;
    }
    localStorage.setItem('theme', mode)
}