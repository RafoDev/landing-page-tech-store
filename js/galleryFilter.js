import products from "./products.js";


const generateProductHTML = (product) => {
    return `
    <article class="productos__gallery-item">
        <img src="${product.imageURL}" alt="${product.name}"
            class="productos__gallery-item-thumbnail">
        <div class="productos__gallery-item-info">
            <div class="productos__gallery-item-description">
                <p class="productos__gallery-item-title">${product.name}</p>
                <p class="productos__gallery-item-subtitle">S/. ${product.price} </p>
            </div>
            <a href="#" class="productos__gallery-item-button">Ver más</a>
        </div>
    </article>
    `;
}

const galleryFilter = () => {
    const options = document.querySelector(
        ".productos__button-container"
    ).children;

    const productsGallery = document.querySelector(".productos__gallery");

    products.forEach(product => productsGallery.innerHTML += generateProductHTML(product));
    

    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            for (let j = 0; j < options.length; j++) {
                options[j].classList.remove("current");
            }
            this.classList.add("current");

            const filterByType = options[i].getAttribute("data-target");

            let filteredProducts = [];
            if (filterByType === "all") {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(
                    (product) => product.type === filterByType
                );
            }

            productsGallery.innerHTML = "";

            filteredProducts.forEach((product) => {
                productsGallery.innerHTML += generateProductHTML(product);
            });
        });
    }
};
export default galleryFilter;
