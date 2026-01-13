function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error").innerText = "All fields required";
        return;
    }

    localStorage.setItem("user", username);
    window.location.href = "dashboard.html";
}
