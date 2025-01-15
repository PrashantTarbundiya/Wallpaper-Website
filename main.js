function email(){
    alert("Thank you for adding your Email");
}
function semail(){
    alert("prashanttarbundiya2@gmail.com is my mail you can contact me");
}
function sphone(){
    alert("7984104910 is my number you can contact me");
}
function smoto(){
    alert("Main motive is this is assignment of iwp");
}
function shp(){
    alert("1600 3468 3490 is my Coustomer care number you can contact me");
}

document.getElementById('SButton').addEventListener('click', function(){
    var search = document.getElementById('Search').value;
    if (search === 'God'){
        window.open("god.html");
    }
    else if(search ==='Live'){
        window.open("live.html");
    }
    else if(search ==='Nature'){
        window.open("nature.html");
    }
    else if(search ==='Educational'){
        window.open("Educational.html");
    }
    else if(search ==='Fashion'){
        window.open("fashion.html");
    }
    else
    {
        alert("Please search the valid item");
    }
});
