
var userList = document.getElementById("user-imp")
var botList = document.getElementsByClassName("bot-imp")
var impValue = document.getElementById("imp-value")
var typing = document.getElementById("typing")

var match = true
var arr1 = ["hello","hi","yo","Asalamualikum"]
var arr2 = ["ma theek","thek","theek","Allah ka sukar ha","Alhamdulilah"]
var arr3 = ["mujhy addmission lena hai","mujhy addmission chahiye","addmission lena hai","addmission chahiye","addmission chaiye"]



function lastMessage() {
    var scrol = document.getElementsByClassName("text-mess");
    scrol.scrollTop = scrol.scrollHeight;
  }


function botAnswer(){
    if(impValue.value == " "){
        impValue.value = null

    }else{

        userList.innerHTML +=  '<li class="text-end"><span class="green-text">' + impValue.value  + '</span></li>'
        
        typing.style.display = "block"
    }
    // for(var i = 0 ; i < arr1.length ; i++){



        if( arr1.lastIndexOf(impValue.value) !== -1){
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'Hello :) '  + '</span></li>'},2500)
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'Kya hal hn ap ke  '  + '</span></li>'; typing.style.display = "none" ;lastMessage()},4000)
            
            
        
        }
        else if( arr2.lastIndexOf(impValue.value) !== -1){
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'Sun ke acha laga  '  + '</span></li>'},2500)
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'toh kya help karo ma ap ki  '  + '</span></li>'; typing.style.display = "none" ;lastMessage()},4000)
           
        
        }
        else if( arr3.lastIndexOf(impValue.value) !== -1){
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'Sun ke acha laga  '  + '</span></li>'},2500)
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'toh kya help karo ma ap ki  '  + '</span></li>'; typing.style.display  = "none";lastMessage()},4000)
        
        }
        else{ 
            setTimeout(function(){userList.innerHTML +=  '<li class=" text-start" ><span>' + 'Samaj nahi saka  '  + '</span></li>' ; typing.style.display  = "none";lastMessage()},2500)
              
        }

    // }
        
        
        if(match){
            impValue.value = ""
            match = false
        }
            match = true
}


function enter123(){
    if(event.keyCode == 13 ){
        botAnswer()

    }
}

