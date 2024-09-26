document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const productList = toggle.nextElementSibling;

            // Toggle active class
            if (productList.classList.contains('active')) {
                productList.classList.remove('active');
            } else {
                // Hide other product lists
                document.querySelectorAll('.product-list').forEach(list => {
                    list.classList.remove('active');
                });
                productList.classList.add('active');
            }
        });
    });
});
