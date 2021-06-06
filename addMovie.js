let add = document.querySelector('#add_div');
let parent_divs = document.querySelector('#grid');
let divs = '';
add.onclick = function(){
    event.preventDefault();
    divs = document.querySelectorAll('div.added_div');
    console.log(divs);
    let i = divs.length;

        //Формируем новый элемент DOM
        let newdiv = document.createElement("div");
        newdiv.setAttribute("class", "added_div" );
        newdiv.appendChild( document.createTextNode(i +" элемент") );

        //вставляем в дерево DOM
        parent_divs.appendChild(newdiv);
    
};


    window.onload = function() {
        if (document.getElementById('added_div')) {
                document.getElementById("empty").style.display = "none";
        }
        else {
            document.getElementById("empty").style.display = "inline";
        }

    };
