const foods = [
    {
        id: 0,
        name: "sudaderas con capuchas",
        price: 14,
        stock: 10,
        urlImage: "./images/featured1.png",
    },
    {
        id: 1,
        name: "camisas",
        price: 24,
        stock: 15,
        urlImage: "./images/featured2.png",
    },
    {
        id: 2,
        name: "sudaderas",
        price: 24,
        stock: 20,
        urlImage: "./images/featured3.png",
    },
];



const contentFoods = document.querySelector('.contentFoods')
const icontCart = document.querySelector('.bx-cart-add')
const contentCartShop = document.querySelector('.contentCartShop')
const contentCartShopItems = document.querySelector('.contentCartShop_items')



let objCartShop = {}




function printFoods() {
    let html = ''

    foods.forEach(({ id, name, price, stock, urlImage }) => {
        html += `
    <div class="food">
    <div class="food_img">
        <img src="${urlImage}" alt="">
    </div>
    <div class="food_body">
        <h3>${name}</h3>
        <p><span>$${price}</span> - stock ${stock}</p>
    </div>
    <div class="food_options">
        <button class="btn btn_add " id="${id}">Agregar</button>
    </div>
</div>
    `

    });
    contentFoods.innerHTML = html

}


function printFootsInCarts() {
    let html = ''

    const arrayobjCartShop =  Object.values(objCartShop)

        arrayobjCartShop.forEach(({id, name, price, amount, urlImage }) => {
            html += `<div class="food">
    <div class="food_img">
        <img src="${urlImage}" alt="">
    </div>
    <div class="food_body">
        <h3>${name}</h3>
        <p><span>$${price}</span> - cant: <strong>${amount}</p></strong>
    </div>
    <div class="food_options">
    <button class="btn btn_rest" id="${id}">-</button>
        <button class="btn btn_add" id="${id}">+</button>
        <button class="btn btn_del" id="${id}">del</button>
    </div>
</div>`
        })

     contentCartShopItems.innerHTML = html
}


printFoods()





contentFoods.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_add')) {
        const idFood = Number(e.target.id)

        const currentFood = foods.find(food => food.id === idFood)

        if (objCartShop[currentFood.id]) {
            objCartShop[currentFood.id].amount++



        }else{
            objCartShop[currentFood.id] = currentFood
            objCartShop[currentFood.id].amount = 1
        }

        console.log(objCartShop);

    }

    printFootsInCarts()

})


contentCartShopItems.addEventListener('click' , (e) =>{
    
   if(e.target.classList.contains('btn_add')) {
    const idFood =  Number(e.target.id);

    objCartShop[idFood].amount++

   }

   if(e.target.classList.contains('btn_rest')) {
    const idFood = Number(e.target.id);
    objCartShop[idFood].amount--

   }

   if(e.target.classList.contains('btn_del')) {
    const idFood = Number(e.target.id);
    delete objCartShop[idFood]

   }
     
   printFootsInCarts()

})


icontCart.addEventListener('click', () => {
    contentCartShop.classList.toggle('contentCartShop_show')

})






