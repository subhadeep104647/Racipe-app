document.addEventListener("DOMContentLoaded", function () {

    fetch("http://127.0.0.1:5000/api/dishes")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelectorAll(".box");

            container.forEach((box, index) => {
                if (data[index]) {
                    box.innerHTML = `
                        <h3>${data[index].name}</h3>
                        <p>Price: ₹${data[index].price}</p>
                    `;
                }
            });
        })
        .catch(error => {
            console.error("Error fetching dishes:", error);
        });

});