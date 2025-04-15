async function fetchData(link)
{
    const url = link;
    
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error)
    {
        console.error(error.message);
    }
}

async function populateTable(link) 
{
    const data = await fetchData(link);
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

document.getElementById("btnArticles").addEventListener("click", function()
{
    populateTable("/api/articoli");
});