const styles = ["theme-alpha", "theme-beta"]

function setStyle(theme, themePath) {
    document.getElementById("theme-css").setAttribute("href", themePath+theme+".css");
}

function changeStyle() {
    const currentStyle = document.getElementById("theme-css").getAttribute("href");
    const currentPage = window.location.pathname.split("/").pop();
    let themePath = "../css/themes/";
    if (currentPage === "index.html") themePath = "css/themes/";
    for (let i = 0; i < styles.length; i++) {

        if (currentStyle === themePath+styles[i]+".css" && i === styles.length-1) {
            setStyle(styles[0], themePath);
            break;
        }
        if (currentStyle === themePath+styles[i]+".css") {
            setStyle(styles[i+1], themePath);
            break;
        }
    }
}
