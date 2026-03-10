function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username:username,
            password:password
        })
    })
    .then(res => res.json())
    .then(data => {

        if(data.message === "Login successful"){

            localStorage.setItem("loggedIn","true");

            window.location.href="dashboard.html";

        }else{
            document.getElementById("error").innerText=data.message;
        }

    })
    .catch(err=>{
        console.log(err);
        document.getElementById("error").innerText="Server error";
    });

}
