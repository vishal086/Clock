let timer = document.querySelector('.timer')

let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let msec = 0;
let sec = 0;
let min = 0;


let timeId = null;

start.addEventListener('click',() =>{
    if(timeId != null)
    {
        clearTimeout(timeId)
    }

    timeId = setInterval(startTimer,10);
})

stop.addEventListener('click',() =>{
    clearTimeout(timeId);
})

reset.addEventListener('click',() =>
{
     clearInterval(timeId);
     timer.innerHTML = `00 : 00 : 00`
     msec = sec = min = 0;
})
function startTimer()
{
    msec ++;
    if(msec == 100)
    {
        msec = 0;
        sec++;
        if(sec == 60)
        {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`

}