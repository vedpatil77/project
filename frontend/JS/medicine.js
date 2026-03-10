function addMedicine() {

    const name = document.getElementById("medName").value;
    const dosage = document.getElementById("dosage").value;
    const time = document.getElementById("time").value;

    if(name === "" || dosage === "" || time === ""){
        document.getElementById("msg").innerText = "All fields are required";
        return;
    }

    fetch("http://localhost:5000/addMedicine", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            dosage: dosage,
            time: time
        })

    })
    .then(res => res.json())
    .then(data => {

        document.getElementById("msg").innerText = data.message;

        document.getElementById("medName").value = "";
        document.getElementById("dosage").value = "";
        document.getElementById("time").value = "";

    })
    .catch(err => {
        document.getElementById("msg").innerText = "Server error";
    });

}


