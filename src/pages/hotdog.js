const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];

export const renderToppings = ()  => {
    const container = document.getElementById('toppingsContainer');
    container.innerHTML = '';

    toppings.forEach((topping) => {
        let toppingClass = 'topping';

        if (topping.selected) {
            toppingClass += ' topping--selected';
        }

        container.innerHTML += 
        `<div class="${toppingClass}">
            <h3>${topping.name}</h3>
            <p>${topping.price}</p>
        </div>`
    });
    
    const clickOnTopping = document.querySelectorAll(".topping");

    clickOnTopping.forEach((topping, index)=> {
        topping.addEventListener("click", () => {
            toggleTopping(index);
            renderToppings();
        });
    });
}

const toggleTopping = (index) => {
    const topping = toppings[index];
    topping.selected = !topping.selected;
}