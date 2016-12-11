$(document).ready(function(){
    
    var botDiv = document.getElementById("bot")
    var submitBut = document.getElementById("submit")
    var comment = document.getElementById("comment")
    var imglink = document.getElementById("imagelink")
    var inputUser = document.getElementById("username")
    var inputMovie = document.getElementById("moviename")
    var errDiv = document.getElementById("error")
    
    var userEx = /^[a-zA-Z0-9]{5,10}$/;
    var linkEx = /^(http:|https:)[/][/][.a-zA-z0-9/_-]{3,200}(.jpg$|.png$|.gif$)/;
    var nameEx = /^[a-zA-z0-9/_-]{3,30}$/;
    
    check1 = 0;
    check2 = 0;
    check3 = 0;
    
    submitBut.onclick = function(){
        
        if(check1==1 && check2==1 && check3==1){
        link = imglink.value;
        movie_title = inputMovie.value;
        
        console.log("READY");
        
        $.ajax({
        url:"http://www.omdbapi.com/?t=" + movie_title,
        dataType:"jsonp",
        success:function(resp){
            console.log(resp);
            poster_link = resp.Poster;
            var posterDiv = document.createElement("div");
            botDiv.appendChild(posterDiv);
            posterDiv.style.width = "100px"
            posterDiv.style.height = "100px"
            posterDiv.style.backgroundImage = "url("+poster_link+")";
            posterDiv.style.backgroundSize = "cover";
            posterDiv.style.backgroundPosition = "center";
            posterDiv.style.position = "relative";
            posterDiv.style.bottom = "200px";
            posterDiv.style.left = "85vw";
            
            
            if(resp.Response=="False"){
                errDiv.innerHTML = resp.Error;
                }
            }
        })
        
        var commentDiv = document.createElement("div");
        var imgDiv = document.createElement("div");
        var userDiv = document.createElement("div");
        
        botDiv.appendChild(commentDiv);
        botDiv.appendChild(imgDiv);
        botDiv.appendChild(userDiv);
        commentDiv.innerHTML = comment.value;
        commentDiv.style.height = "20vh";
        commentDiv.style.width = "90vw";
        commentDiv.style.backgroundColor = "#101340";
        commentDiv.style.fontFamily = "Verdana";
        commentDiv.style.textAlign = "center";
        commentDiv.style.color = "dodgerblue";
        commentDiv.style.position="relative";
        commentDiv.style.left = "20px";
        commentDiv.style.top = "100px";
        commentDiv.style.marginBottom = "10px";
        commentDiv.style.transition = "1s";

        
        imgDiv.style.width = "10vw"
        imgDiv.style.height = "10vh"
        imgDiv.style.backgroundImage = "url("+imglink.value+")";
        imgDiv.style.backgroundSize = "cover";
        imgDiv.style.position = "relative";
        imgDiv.style.top = "-80px";
        imgDiv.style.left = "-10px";
        
        userDiv.style.width= "10vw";
        userDiv.style.height = "auto";
        userDiv.innerHTML = inputUser.value;
        userDiv.style.backgroundColor = "#3139BF";
        userDiv.style.fontFamily = "Verdana";
        userDiv.style.color = "dodgerblue";
        userDiv.style.position = "relative";
        userDiv.style.float = "right";
        
        
    }
    }
    
    inputUser.onkeyup = function(){
        user_str = inputUser.value;
            if(userEx.test(user_str)){
                check1 = 1;  
                errDiv.innerHTML = "";
            } else {
                check1 = 0;
                errDiv.innerHTML = "Incorrect Username";
                errDiv.style.color = "#BF1F15";   
            }

            if(check1==1 && check2==1 && check3==1){
                    console.log("ALL VALID")
                    errDiv.innerHTML = "Click Submit";
                    errDiv.style.color = "dodgerblue";
            } else {
                console.log("Check all conditions")
                }
    }
    
    imglink.onkeyup = function() {
        img_str = imglink.value;
            if(linkEx.test(img_str)){
                check2 = 1;
                errDiv.innerHTML = "";
            } else {
                check2 = 0;
                errDiv.innerHTML = "Incorrect ImageLink";
                errDiv.style.color = "#BF1F15";
            }
        
            if(check1==1 && check2==1 && check3==1){
                console.log("ALL VALID")
                errDiv.innerHTML = "Click Submit";
                errDiv.style.color = "dodgerblue";
            } else {
            console.log("Check all conditions")
            }
    }
    
    inputMovie.onkeyup = function(){
        movie_str = inputMovie.value;
            if(nameEx.test(movie_str)){
                check3 = 1;
                errDiv.innerHTML = "";
            } else {
                check3 = 0;
                errDiv.innerHTML = "Incorrect Movie Name";
                errDiv.style.color = "#BF1F15";
            }
        
            if(check1==1 && check2==1 && check3==1){
                console.log("ALL VALID")
                errDiv.innerHTML = "Click Submit";
                errDiv.style.color = "dodgerblue";
            } else {
            console.log("Check all conditions")
            }
    }
});
    /*
    var  = / /;
    
    var  = document.getElementById("");
    
    inputName.onkeyup = function(){
    name_str = inputName.value;
        if (regEx.test(name_str)){
            console.log("Valid")
        } else {
            console.log("Invalid you scrub")
        }
    }
    
    $.ajax({
        url:"",
        dataType:"",
        success:function(resp){ //resp is the response from the db
            console.log(resp);
            
            //we are getting the actors property from the object that is being returned. *See inspect*
            }
        })

}); */