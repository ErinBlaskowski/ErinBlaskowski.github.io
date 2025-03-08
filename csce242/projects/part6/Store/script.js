const getProducts = async () => {
    const url = "https://github.com/ErinBlaskowski/ErinBlaskowski.github.io/blob/12b1925ff15295e48a1de10b34552545a82c3f61/csce242/json/products.json";

    try{
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log(error);
    }
};

const showProducts = () => {
    let products = getProducts(); //wouldn't let me add "await" in front of getProducts()

    let productSection = document.getElementById("column1");

    for (let i = 0; i < array.length; i++) {
        const element = array[index];
        
    }{
        const element = array[index];
        
    }(product => {
        productSection.append(getProductItem(product));
    });
};

const getProductItem = product => {
    let section = document.createElement("box");

    let src = document.createElement(src);
    src.innerText = img_name;
    section.append(src);

    let h3 = document.createElement(h3);
    h3.innerText = name + " - " + price;
    section.append(h3);

    return section;
}

window.onload = () => showProducts();