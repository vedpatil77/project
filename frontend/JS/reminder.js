fetch("http://localhost:5000/getMedicines")

.then(response => response.json())

.then(data => {

    const table = document.getElementById("tableBody");

    table.innerHTML = "";

    data.forEach(med => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${med.name}</td>
            <td>${med.dosage}</td>
            <td>${med.time}</td>
        `;

        table.appendChild(row);

    });

})

.catch(error => {

    console.log("Error loading medicines:", error);

});
