async function fetchData(link)
{
    const url = link;
    
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        return data;
    }
    catch (error)
    {
        console.error(error.message);
    }
}

async function populateTable(link) 
{
    console.log("Calling API:", link);
    const data = await fetchData(link);
    console.log("Received data:", data);
    data_table = document.getElementById("data_table");

    data.forEach(array => 
    {
        const row = document.createElement("tr");
        const data1 = document.createElement("td");
        const data2 = document.createElement("td");
        const data3 = document.createElement("td");

        data1.textContent = array.nome;
        data2.textContent = array.categoria;
        data3.textContent = array.sottoCategoria;

        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);

        data_table.appendChild(row);
    });
}

async function makeRequest()
{
    const categorie = document.getElementById("categories").value;
    const sottoCategorie = document.getElementById("subCategories").value;
    if(categorie != "")
    {
        if(sottoCategorie != "")
        {
            await populateTable(`/api/articoli/${categorie}/${sottoCategorie}`);
        }
        else
        {
            await populateTable(`/api/articoli/${categorie}`);
        }
    }
    else
    {
        await populateTable("/api/articoli");
    }
}

document.getElementById("btnArticles").addEventListener("click", function()
{
    makeRequest();
});