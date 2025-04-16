const translations = {
    "it": {
        "title": "My WebIO",
        "subtitle": "Simone Giorgini 5CM",
        "ptco": "PTCO",
        "projects": "Progetti",
        "trip": "Gita",
        "guidance": "Orientamento"
    },
    "en": {
        "title": "My WebIO",
        "subtitle": "Simone Giorgini - 5CM",
        "ptco": "Internship",
        "projects": "Projects",
        "trip": "Trip",
        "guidance": "Guidance"
    }
};

function changeLanguage(lang) {
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("sub_title").innerText = translations[lang].subtitle;
    document.getElementById("ptco").innerText = translations[lang].ptco;
    document.getElementById("projects").innerText = translations[lang].projects;
    document.getElementById("trip").innerText = translations[lang].trip;
    document.getElementById("guidance").innerText = translations[lang].guidance;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}