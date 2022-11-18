const addButtons = (id) => {
    const dad = document.querySelector(id);
    setTimeout(() => {
        dad.children[1].classList.remove("ocultar"); 
    }, 10);
}

const removeButtons = (id) => {
    const dad = document.querySelector(id);
    setTimeout(() => {
        dad.children[1].classList.add("ocultar"); 
    }, 10);
}

const showPage = () => {
    document.getElementById("container-loading").style.display = "none";
    document.getElementById("container").style.display = "block";
}

setTimeout(showPage, 1000);