var istatus = document.querySelector('h5')
var btn = document.querySelector('.add')
check = 0

btn.addEventListener('click',function(){
    if(check == 0){
        istatus.innerHTML = "Friend"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "#b1afaf"
        check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "#47af3d"
        check = 0
    }
})