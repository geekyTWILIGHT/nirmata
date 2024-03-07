// Image change
function changeImage(imageUrl) {
    document.getElementById('mainImageContainer').style.backgroundImage = "url('" + imageUrl + "')";
}

// Increase and decrease function
document.getElementById('inc_btn').addEventListener('click', function() {
    increaseQuantity();
});

document.getElementById('dec_btn').addEventListener('click', function() {
    decreaseQuantity();
});

let quantity = 1;
const quantityElement = document.getElementById('quantity');

function increaseQuantity() {
    if (quantity < 20) {
        quantity++;
        updateQuantity();
    }
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

function updateQuantity() {
    quantityElement.textContent = quantity;
}

// Image zoom
// const imageContainer = document.getElementById('mainImageContainer');
// const container = document.querySelector('.prod-img');

// container.addEventListener('mousemove', (e) => {
//     const { left, top, width, height } = container.getBoundingClientRect();
//     const x = (e.clientX - left) / width;
//     const y = (e.clientY - top) / height;

//     const scale = 1.5; // Adjust the zoom level here

//     imageContainer.style.transformOrigin = `${x * 100}% ${y * 100}%`;
//     imageContainer.style.transform = `scale(${scale}) translate(-${x * 100 / scale}%, -${y * 100 / scale}%)`;
// });

// container.addEventListener('mouseleave', () => {
//     imageContainer.style.transform = 'none';
// });