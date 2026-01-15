fetch("http://localhost:5000/getMedicines")
.then(res => res.json())
.then(data => {
    var table = document.getElementById("tableBody");
    data.forEach(med => {
        table.innerHTML += `
            <tr>
                <td>${med.name}</td>
                <td>${med.dosage}</td>
                <td>${med.time}</td>
            </tr>
        `;
    });
});
