const actualProducts = products;
const mainShopBoard = document.querySelector('.main__shop-board');


                    // <div class="card m-4 main__shop-board-cards">
                    //     <img src="./img/n1.jpg" class="card-img-top" alt="...">
                    //     <div class="card-body">
                    //         <h5 class="card-title">Koszula classic</h5>
                    //         <p class="card-text">Klasyczny krój i elegnacja na codzień</p>
                    //         <div class="d-flex flex-column align-items-center  fs-4">
                    //             <div class="d-flex">
                    //                 <p class="me-2 mb-0" for="">99.00</p>
                    //                 <p class="mb-0" for="">zł</p>
                    //             </div>
                    //             <a href="./shop.html" class="btn btn-primary mx-auto">do koszyka</a>        
                    //         </div>                            
                    //     </div>
                    // </div>



const renderProducts = (items) => {
    for (let i = 0; i < items.length; i++) {
        console.log('iterator: ', i);
        const newProduct = document.createElement('div');
        newProduct.className = `card m-4 main__shop-board-cards`;
        newProduct.innerHTML = `
                        <img src="${items[i].images}" class="card-img-top" alt="zdjęcie produktu">
                        <div class="card-body">
                            <h5 class="card-title">${items[i].name}</h5>
                            <p class="card-text">${items[i].description}</p>
                            <div class="d-flex flex-column align-items-center  fs-4">
                                <div class="d-flex">
                                    <p class="me-2 mb-0" for="">${items[i].price.toFixed(2)}</p>
                                    <p class="mb-0" for="">zł</p>
                                </div>
                                <a href="./shop.html" class="btn btn-primary mx-auto">do koszyka</a>        
                            </div>                            
                        </div>`
        
        mainShopBoard.appendChild(newProduct);
    }
}

//zbuduj card do renderu i usuń zapis statyczny


document.onload = renderProducts(actualProducts);