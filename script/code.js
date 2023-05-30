// Products
let products = [
    {
        id: 1,
        name: "Dell Latitude",
        description: "Dell latitude E5450 i3 5th GEN",
        type: "Business",
        price: 15000,
        image: "https://i.postimg.cc/65tcMqdc/Dell-Latitude-E5450-i3-5th-GEN-1-for-business-10000.jpg"
    },
    {
        id: 2,
        name: "Acer Extensa",
        description: "Acer Extensa 15 6 inch, SSD 256GB, RAM 8GB",
        type: "Personal",
        price: 10000,
        image: "https://i.postimg.cc/gJKtZmp1/Acer-Extensa-15-6-inch-256-GBSSd-8-GBRAM.png"
    },
    {
        id: 3,
        name: "Acer Travel",
        description: "Acer Travel Mate Intel Core i5, SSD 512, RAM 8GB",
        type: "Business",
        price: 20000,
        image: "https://i.postimg.cc/0j2WGF2j/Acer-Travel-Mate-Intel-Corei5-SSD512-8-GBRAM.png"
    },
    {
        id: 4,
        name: "Lenovo Idea",
        description: "Lenovo Idea pad, HDD 1TB, RAM 4",
        type: "Office",
        price: 30000,
        image: "https://i.postimg.cc/rwwdXLQg/Lenovo-IDea-Pad-1-TBHDD-4-GBRAM-6350.png"
    },
    {
        id: 5,
        name: "HP Elite",
        description: "HP Elite Book intel Core, i5, SSD 256, RAM 8",
        type: "Personal",
        price: 15000,
        image: "https://i.postimg.cc/7Y83v1PB/HPElite-Book-Intel-Core-i5-1135-G7-256-GBSSD-8-GB.png"
    }
]
// Display
let output = document.querySelector('.productListing');
products.forEach( (item)=> {
    output.innerHTML += `
        <div class="card"">
            <img src="${item.image}" loading="lazy" class="m-auto card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name} for ${item.type}</h5>
                <p class="card-text"><span>Description: </span>${item.description}</p>
                <p class="card-text"><span>Price: </span>${item.price}</p>
            </div>
        </div>
    `
} )