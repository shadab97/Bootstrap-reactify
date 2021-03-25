var na = document.getElementsByClassName("na");
for (e of na) {

    if (e.innerText == "class") {
        e.innerText = "className"
    }
    if (e.innerText == "tabindex") {
        e.innerText = "tabIndex"
    }
    if (e.innerText == "for") {
        e.innerText = "htmlFor"
    }
    if (e.innerText == "selected") {
        e.innerText = 'value=" "'
    }


}


