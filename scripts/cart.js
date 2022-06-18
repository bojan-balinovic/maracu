function getTemplate(image, name, price) {
    let template = `

    <div class="row shopping-cart-item">
        <div class="col-3 justify-content-center">
            <img src="${image}" class="shoping-cart-item__image" alt="item1" />
        </div>
        <div class="col-7">
            <span class="item-name">${name}</span>
            <br />
            <span class="item-price">$${price}</span>
        </div>
        <div class="col-2">
        <button class="btn btn-danger" onclick="removeItem('${image}')">Remove</button>
        </div>
    </div>
                    

    `
    return template;
}
$(document).ready(function() {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    let html = '';
    let totalPrice = 0;
    cartItems.forEach(cartItem => {
        html += getTemplate(cartItem.image, cartItem.name, cartItem.price);
        totalPrice += parseInt(cartItem.price);
    });
    $('.shopping-cart-items').html(html);
    $('#total-text').html('Total price: $' + totalPrice);

})


function removeItem(imageFilter) {
    let cartItems = JSON.parse(localStorage.getItem('cart'))
    let newStorage = JSON.stringify(cartItems.filter(e => e.image != imageFilter));
    localStorage.setItem('cart', newStorage);
    location.reload();
}