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

async function changeLanguage(link) 
{
    console.log("Calling API:", link);
    const data = await fetchData(link);
    console.log("Received data:", data);
    const par = document.getElementById("par");
    const btn = document.getElementById("btn");
    const label_lang = document.getElementById("label_lang");

    par.textContent = data.par;
    btn.textContent = data.btn;
    label_lang.textContent = data.label_lang;
}

async function selectionLanguage()
{
    const languages = document.getElementById("languages").value;
    await changeLanguage(`/api/lang/${languages}`);
}

document.getElementById("btn").addEventListener("click", function()
{
    selectionLanguage();
});