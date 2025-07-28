const mainImage = document.querySelector('.phones-img img');
document.querySelectorAll('.more-img img').forEach(img => {
    img.addEventListener('mouseover', () => {
        mainImage.src = img.src;
    });
});

function increaseQuantity() {
    let qty = document.getElementById('quantity');
    qty.value = Math.max(1, parseInt(qty.value) || 1) + 1;
}

function decreaseQuantity() {
    let qty = document.getElementById('quantity');
    qty.value = Math.max(1, (parseInt(qty.value) || 1) - 1);
}

const qtyInput = document.getElementById('quantity');
const priceElement = document.querySelector('.discount');
const basePrice = 135900;

function updatePrice() {
    const quantity = parseInt(qtyInput.value) || 1;
    const totalPrice = basePrice * quantity;
    priceElement.innerHTML = `<i>-10%</i> ₹${totalPrice.toLocaleString()}`;
}

function increaseQuantity() {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) || 1) + 1;
    updatePrice();
}

function decreaseQuantity() {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value) || 1) - 1);
    updatePrice();
}

qtyInput.addEventListener('input', updatePrice);

updatePrice();
