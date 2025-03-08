const getProducts = async () => {
    const url = "https://raw.githubusercontent.com/ErinBlaskowski/ErinBlaskowski.github.io/12b1925ff15295e48a1de10b34552545a82c3f61/csce242/json/products.json"
    try{
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log(error);
    }
};

const showProducts = async () => {
    let products = await getProducts();

    let productSection = document.getElementById("grid");

    products.forEach(product => {
        productSection.append(getProductItem(product));
    });
};

const getProductItem = product => {
    const gridItem = document.createElement('div');

    let src = document.createElement(src);
    src.innerText = product.img_name;
    gridItem.append(src);

    let h3 = document.createElement(h3);
    h3.innerText = product.name + " - " + product.price;
    gridItem.append(h3);

    return section;
}

window.onload = () => showProducts();