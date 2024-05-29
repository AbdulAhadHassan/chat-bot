
var userList = document.getElementById("user-imp")
var botList = document.getElementsByClassName("bot-imp")
var impValue = document.getElementById("imp-value")


function botAnswer(){
    if(event.keyCode == 13 || event.type == "click" ){
        
        userList.innerHTML +=  '<li class="text-start"> <span> ' + impValue.value  + "</span> </li>" 
    }

    // if( userList ==  ["water", "fire"]){
    //     userList.innerHTML +=  '<li class=" text-end" >' + impValue.value  + " </li>" 
    // }
    console.log(event)


}