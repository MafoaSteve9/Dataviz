// const img = document.querySelector('img');

// axios.get('https://perenual.com/api/species-list?page=1&key=sk-9lep6419bee20788e274')
// .then((response) => {
//     console.log(response.data)
    



//     response.data.forEach((plant) => {
//         const title = document.createElement('h2');
//         title.innerText = plant.common_name;

//         divData.appendChild(title);
//     })
// })
let nameS = document.getElementById('nameS')
let name = document.getElementById('name')
let image = document.getElementById("image")
const img = async() => {
    // let randomNumber = Math.ceil(Math.random() *150)+1;

    let requestString =`https://perenual.com/api/species-list?page=1&key=sk-9lep6419bee20788e274`;

    let data = await fetch (requestString);
    console.log(data);

    let response = await data.json();
    console.log(response)

    image.src=response.data[2].default_image.original_url
    name.textContent = `${response.data[1].common_name}`
    nameS.textContent = `${response.data[1].scientific_name
    }`

};
img()




