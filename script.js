let Minut = document.getElementById("minut")
let Second = document.getElementById("second")
let m = 15;
let s = 0;
function Timer(){
    if(s == 0){
        s = 60;
        m--;
    }
    s--;
    if(m<0){
        s=0;
        m=0
        Stop()
    }

    Minut.innerHTML = m < 10 ? `0${m}` : m
    Second.innerHTML = s < 10 ? `0${s}` : s

}
const myInterval = setInterval(Timer,1000)

function Stop(){
    clearInterval(setInterval)
}
