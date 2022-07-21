const novoArray = [];

const products = document.querySelector('.products-wraper');

function renderizar(produto) {

    for (let i = 0; i < produto.length; i++) {
        criaLi(produto[i]);
    }
};
renderizar(data);

function criaLi(objeto) {
    let li = document.createElement("li");
    li.classList.add("card");

    let imgContainer = document.createElement('div');
    imgContainer.classList.add("img_container")
    const img = document.createElement("img");
    img.classList.add("product-img");
    img.src = objeto.img
    imgContainer.append(img)

    const title = document.createElement("div");
    title.classList.add("title");
    const h5 = document.createElement("h5");
    h5.classList.add("products-title");
    h5.innerText = objeto.nameItem;
    title.append(h5)

    const description = document.createElement("article");
    description.classList.add("description");

    const p = document.createElement("p");
    p.classList.add("p");
    p.innerText = objeto.description;

    const b = document.createElement("b");
    b.classList.add("product-price");
    b.innerText = "R$ " + objeto.value;

    const a = document.createElement("a");
    a.classList.add("a");
    a.innerText = objeto.addCart;
    a.id = objeto.id

    a.addEventListener('click', function (event) {
        adicionarAoCarrinho(event.target.id);
    })

    description.append(p, b, a);
    li.append(imgContainer, title, description);

    products.append(li);
};

function adicionarAoCarrinho(objeto) {
    novoArray.push(data[objeto - 1]);
    console.log(novoArray)
};

//


const carrinhoDeCompras = document.querySelector('.carrinho_de_compras_ul');

function criaCa(objeto2) {
    let liCa = document.createElement("li");
    li.classList.add(adicionarAoCarrinho());
    carrinhoDeCompras.append(liCa);
};
