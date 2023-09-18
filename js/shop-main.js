const actualProducts = products;
const mainShopBoard = document.querySelector('.main__shop-board');
const searchBarInput = document.querySelector('.header__navbar-searchbar-input');
const basketLabel = document.querySelector('.header__cart-label')
const basketRemoveButton = document.querySelector('.header__cart-remove-btn');
let basket = [];

const renderProducts = (items) => {
    for (let i = 0; i < items.length; i++) {
        const newProduct = document.createElement('div');
        newProduct.className = `card m-4 main__shop-board-cards`;
        newProduct.innerHTML = `
                        <img src="${items[i].images}" class="card-img-top" alt="zdjęcie produktu">
                        <div class="card-body">
                            <h5 class="card-title text-center text-capitalize">${items[i].name}</h5>
                            <p class="card-text">${items[i].description}</p>
                            <div class="d-flex flex-column align-items-center  fs-4">
                                <div class="d-flex">
                                    <p class="me-2 mb-0" for="">${items[i].price.toFixed(2)}</p>
                                    <p class="mb-0" for="">zł</p>
                                </div>
                                <a data-id="${items[i].id}" href="#" class="btn btn-primary main__shop-board-card-toBasketButton mx-auto">do koszyka</a>        
                            </div>                            
                        </div>`        
        mainShopBoard.appendChild(newProduct);
    }
}

document.onload = renderProducts(actualProducts);

searchBarInput.addEventListener('input', (e) => {
    const searchThing = e.target.value;
    console.log(searchThing);
    const foundThing = actualProducts.filter((product) => {
        if (product.name.toLocaleLowerCase().includes(searchThing.toLocaleLowerCase())) {
            return product
        };
    });


    mainShopBoard.innerHTML = '';
    renderProducts(foundThing);
});


const toBasketButtons = document.querySelectorAll('.main__shop-board-card-toBasketButton');



const addToBasket = (e) => {
    const selectedId = parseInt(e.target.dataset.id);
    const key = actualProducts.findIndex((product) => product.id === selectedId);
    // console.log(key)
    // console.log(actualProducts.at(key))
    basket.push(actualProducts.at(key));
    const sumupBasket = basket.reduce((sum, thing) => {
        return (sum += thing.price);
    }, 0);
    basketLabel.textContent = sumupBasket.toFixed(2);
    sumupBasket > 0 ? basketRemoveButton.classList.add('header__cart-remove-btn--active') : basketRemoveButton.classList.remove('header__cart-remove-btn--active')
};

toBasketButtons.forEach((btn) => {
    btn.addEventListener('click', addToBasket);
});


const removeFromBasket = () => {
    basket = [];
    basketLabel.textContent = '0.00';
}
    

basketRemoveButton.addEventListener('click', removeFromBasket);


