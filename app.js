function fullMenu() {
    let allItems = document.querySelectorAll('.menu-item');
    allItems.forEach(item => {
        item.style.display = 'block';
    });
}

function specificMenu(category) {
    let allItems = document.querySelectorAll('.menu-item');
    allItems.forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
