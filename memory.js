function saveName(name) {
    localStorage.setItem("userName", name);
}

function getName() {
    return localStorage.getItem("userName");
}
