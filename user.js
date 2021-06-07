let isLogged = false;
let add = document.querySelector('#btnSubmit');
let parent_divs = document.querySelector('#grid');
let divs = '';

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
        // document.getElementById("empty").style.display = "block";
        document.getElementById("notLogged").parentNode.removeChild(document.getElementById("notLogged"));
    }
}

user.innerText = localStorage.user

add.onclick = function(){
    event.preventDefault();
    divs = document.querySelectorAll('div.added_div');
    console.log(divs);
    let i = divs.length;

    //Формируем новый элемент DOM
    let newdiv = document.createElement("div");
    newdiv.setAttribute("class", "added_div" );
    newdiv.appendChild( document.createTextNode(document.getElementById("name").value) );

    //вставляем в дерево DOM
    parent_divs.appendChild(newdiv);

    if (i => 0) {
        document.getElementById("empty").style.display = "none";
    }
    else {
        document.getElementById("empty").style.display = "inline";
    }

    let counter = i;

    localStorage.setItem(counter.toString(), document.getElementsByClassName("added_div")[i].innerHTML);
};

if(!localStorage.user){
    localStorage.user = "";
}

if(localStorage.user){
    document.getElementById("loginBtn").parentNode.removeChild(document.getElementById("loginBtn"));
    document.getElementById("notLogged").parentNode.removeChild(document.getElementById("notLogged"));
    isLogged = true;
}

function OpenForm(){
    document.getElementById("popup-2").classList.toggle("active")
}

function TogglePopUp(){
    document.getElementById("popup-1").classList.toggle("active");
}

if(!isLogged){
    //document.getElementById("empty").style.display = "none";
    document.getElementById("empty").parentNode.removeChild(document.getElementById("empty"));
    document.getElementById("drop").parentNode.removeChild(document.getElementById("drop"));
    document.getElementById("user").style.display = "none";
}
function Exit(){
    window.localStorage.removeItem("user");
}
function reload(){
    location.reload()
}
function set(){
    setTimeout(reload,1);
}

