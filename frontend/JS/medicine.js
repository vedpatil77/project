function addMedicine() {
    var data = {
        name: document.getElementById("medName").value,
        dosage: document.getElementById("dosage").value,
        time: document.getElementById("time").value
    };

    fetch("http://localhost:5000/addMedicine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    });
}


