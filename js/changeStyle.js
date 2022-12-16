let styles = ["theme-alpha", "theme-beta"]

function setStyle(theme) {
    document.getElementById("theme-css").setAttribute("href", "../css/themes/"+theme+".css");
}

function changeStyle() {
    let currentStyle = document.getElementById("theme-css").getAttribute("href");
    for (let i = 0; i < styles.length; i++) {
        if (currentStyle === "../css/themes/"+styles[i]+".css" && i === styles.length-1) {
            setStyle(styles[0]);
            break;
        }
        if (currentStyle === "../css/themes/"+styles[i]+".css") {
            setStyle(styles[i+1]);
            break;
        }
    }
}
