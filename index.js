var sec = 0;
var min = 0;
var hora = 0;
var interval;

function twoD(digits){
    if(digits < 10){
        return('0'+digits);
    }else{
        return(digits);
    }
};

function start(){
    watch();
    interval = setInterval(watch,1000);
};

function pause(){
    clearInterval(interval);
};

function restart(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('watch').innerText = '00:00:00';
};

function watch(){
    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(min==60){
            min=0;
            hora++
        };
    }
    document.getElementById('watch').innerText = twoD(hora) + ":" + twoD(min) + ":" + twoD(sec);
};