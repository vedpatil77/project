function addMedicine() {
    var name = document.getElementById("medName").value;
    var dosage = document.getElementById("dosage").value;
    var time = document.getElementById("time").value;

    if (name === "" || dosage === "" || time === "") {
        document.getElementById("msg").innerText = "Fill all fields";
        return;
    }

    var medicines = JSON.parse(localStorage.getItem("medicines")) || [];
    medicines.push({ name, dosage, time });
    localStorage.setItem("medicines", JSON.stringify(medicines));

    document.getElementById("msg").innerText = "Medicine Added";
}
