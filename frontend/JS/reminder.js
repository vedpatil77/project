var medicines = JSON.parse(localStorage.getItem("medicines")) || [];
var table = document.getElementById("tableBody");

medicines.forEach(function(med) {
    var row = `<tr>
        <td>${med.name}</td>
        <td>${med.dosage}</td>
        <td>${med.time}</td>
    </tr>`;
    table.innerHTML += row;
});

function back() {
    window.location.href = "dashboard.html";
}
