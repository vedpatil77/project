function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === "Login successful") {
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("error").innerText = data.message;
        }
    });
}

