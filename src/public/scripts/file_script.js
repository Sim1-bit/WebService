async function fetchData(link)
{
    const url = link;
    
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error)
    {
        console.error(error.message);
    }
}

async function populatePage(link)
{
    console.log("Calling API:", link);
    const data = await fetchData(link);
    console.log("Received data:", data);

    const href_pcto = document.getElementById("href_pcto");
    const href_projects = document.getElementById("href_projects");
    const href_orientation = document.getElementById("href_orientation");
    const label_lang = document.getElementById("label_lang");
    const txt1 = document.getElementById("txt1");

    label_lang.textContent = data.label_lang;
    href_pcto.textContent = data.href_pcto;
    href_projects.textContent = data.href_projects;
    href_orientation.textContent = data.href_orientation;
    txt1.textContent = data.txt1;
}

document.addEventListener("DOMContentLoaded", function() 
{
    const path = window.location.pathname; // Ottieni il path della pagina
    
    const fileName = path.split("/").pop(); // Estrai solo il nome file
    
    const pageName = fileName.split(".")[0]; // Rimuovi l'estensione

    const aux = document.getElementById("href_" . pageName);
    aux.style.backgroundColor = "rgb(23, 73, 188)";
    aux.style.borderRadius = "50px";

    populatePage(`/api/${pageName}`);    
});

document.getElementById("languages").addEventListener("change", function()
{
    const languages = document.getElementById("languages").value;
    if(languages != "")
    {
        const path = window.location.pathname; // Ottieni il path della pagina
    
        const fileName = path.split("/").pop(); // Estrai solo il nome file
    
        const pageName = fileName.split(".")[0]; // Rimuovi l'estensione

        populatePage(`/api/${pageName}/${languages}`);
    }
});