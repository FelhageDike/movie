let isLogged = false;

function Login(){

    let User = {
        username: document.getElementById("username").value,
        password: document.getElementById("psw").value
    }

    let Username = document.getElementById("username").value;

    localStorage.setItem('user', Username);
    localStorage.setItem('data', JSON.stringify(User));
    isLogged = true;

    document.getElementById("loginBtn").parentNode.removeChild(document.getElementById("loginBtn"));
    document.getElementById("user").textContent = localStorage.getItem('user');

    if(isLogged){
        document.getElementById("loginForm").parentNode.removeChild(document.getElementById("loginForm"));
        document.getElementById("empty").style.display = "block";
        document.getElementById("notLogged").parentNode.removeChild(document.getElementById("notLogged"));
    }
}
user.innerText = localStorage.user



if(!localStorage.user){
    localStorage.user = "";
}

if(localStorage.user){
    document.getElementById("loginBtn").parentNode.removeChild(document.getElementById("loginBtn"));
    document.getElementById("notLogged").parentNode.removeChild(document.getElementById("notLogged"));
    isLogged = true;
}



function OpenForm(){
    document.getElementById("flexLogin").style.display = "flex";
}

if(!isLogged){
    document.getElementById("empty").style.display = "none";
}


