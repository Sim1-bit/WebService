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

    const href_ptco = document.getElementById("href_ptco");
    const href_projects = document.getElementById("href_projects");
    const href_trip = document.getElementById("href_trip");
    const href_orientation = document.getElementById("href_orientation");
    const label_lang = document.getElementById("label_lang");

    label_lang.textContent = data.label_lang;
    href_ptco.textContent = data.href_ptco;
    href_projects.textContent = data.href_projects;
    href_trip.textContent = data.href_trip;
    href_orientation.textContent = data.href_orientation;
}

document.addEventListener("DOMContentLoaded", function() 
{
    populatePage(`/api/lang`);
});

document.getElementById("languages").addEventListener("change", function()
{
    const languages = document.getElementById("languages").value;
    if(languages != "")
    {
        populatePage(`/api/lang/${languages}`);
    }
});