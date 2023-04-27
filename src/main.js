function renderData(MrCrypto) {
    const name = document.getElementById("name");
    name.innerText = MrCrypto.name;

    const img = document.getElementById("img-cotainer");
    img.src = MrCrypto.image;

    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = `
    <table>
        <tr>
            <th>Background</th>
            <th>${MrCrypto.attributes[0].value}</th>
        <tr>
        <tr>
            <th>Clothes</th>
            <th>${MrCrypto.attributes[1].value}</th>
        <tr>
        <tr>
            <th>Type</th>
            <th>${MrCrypto.attributes[2].value}</th>
        <tr>
        <tr>
            <th>Headwear</th>
            <th>${MrCrypto.attributes[3].value}</th>
        <tr>
        <tr>
            <th>Eyes</th>
            <th>${MrCrypto.attributes[4].value}</th>
        <tr>
        <tr>
            <th>Moustache</th>
            <th>${MrCrypto.attributes[5].value}</th>
        <tr>
        `;

    

    const footer = document.querySelector("footer p");
    footer.innerText = MrCrypto.description


    

    const description = document.createElement("p");
    dataContainer.appendChild(description);


    //const edition = document.createElement("p");
    //edition.innerText = "Edición "+ MrCrypto.edition;
    //dataContainer.appendChild(edition);

    
}

async function fetchData(mrCryptoNum) {
    const url = `https://apinft.racksmafia.com/api/${mrCryptoNum}.json`
    //let res = await fetch(url)
    let res = await fetch("./object.json")

    let data = await res.json()
    return data
}

function handleSearchBar() {
    const searchBar = document.querySelector('#searchBar');
    const currentNumValue = searchBar.value;
    fetchData(currentNumValue)
        .then(data => renderData(data));
}

const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', handleSearchBar);



window.onload = () => fetchData(0).then(data => renderData(data));



