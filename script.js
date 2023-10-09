const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    return newValue
}




function showAll(productsArray) {
    myLi = '' //para zerar a myLi e não ficar criando listas em cima de listas.

    productsArray.forEach((product) => {
        myLi += `
                <li >
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>
            
            `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    //Spread Operator (altera apenas onde foi pedido alteração e mantem o que não foi pedido)
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //dará 10% de desconto
    }))

    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
                    <li >
                        <p>O valor total dos itens é: ${formatCurrency(totalValue)}</p>
                    </li>
                    `

    console.log(totalValue)
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}




buttonShowAll.addEventListener('click', () => showAll(menuOptions)) // funcção anônima para q não seja executada a função automaticamente.
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)