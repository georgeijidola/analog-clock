var canva = document.getElementById("canva");

var ctx = canva.getContext("2d");
// ctx.beginPath();
// ctx.arc(canva.width/2, canva.height/2, 150, 0, 1.7*Math.PI);
// ctx.fillStyle = "#1E1E1E";
// ctx.fill();
// ctx.stroke();

var radius = canva.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
// setInterval(drawtickClock, 1000);
// drawClock();
setInterval(drawClock, 1000);

// function drawtickClock () {
//     drawTime(ctx, radius);
// }

function drawClock () {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace() {
    var gradi;

    ctx.beginPath();
    ctx.arc(2, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "#999";
    ctx.fill();

    gradi = ctx.createRadialGradient(0,0, radius*0.95, 0, 0, radius*1.05);
    // gradi.addColorStop(0, "black");
    gradi.addColorStop(0.5, "white");
    gradi.addColorStop(0.8, "red");
    ctx.strokeStyle = gradi;
    ctx.lineWidth = radius*0.75;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0,radius*0.1,0 , 2*Math.PI);
    ctx.fillStyle = "red"
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var angle;
    var num;
    ctx.font = radius*0.15 + "px helvetica"
    // ctx.font.fillStyle = "white";
    // ctx.shadowColor = "white";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    // console.log(Math.PI);
    for(num=1; num <=12; num++) {
        angle = num * Math.PI /6;
        ctx.rotate(angle);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-angle);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(angle);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-angle);
    }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    // console.log(minute);
    
    // var audioPlay = document.querySelector('audio');
    // if ((minute == 59) || (minute == 60)) {
    //         audioPlay.play();
    //         console.log(audioPlay);
    //     }

    //     else if ((minute >=1 ) && (minute <= 5)) {
    //         audioPlay.play();
    //     }

    //     else {
    //         audioPlay.pause();
    //     }

    hour=hour%12;

    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.05);
    
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.75, radius*0.03);
    
    // console.log(second);
    
    // if (minute == 0) {
    //     document.querySelector('audio').play();
    // }

    // var audioplay = document.querySelector('audio');

   
    // if ((second >= 0) && (second <= 29)) {
        // audioplay.play();
        // audioplay.loop = true;
        // audioplay.play().loop;
        // audioplay.currentTime=10;
        // console.log(audioplay);
        // console.log( second );
        // audioplay.addEventListener('play', function(e){
        //     // console.log(e)
        //     audioplay.loop;
        // })
    
        // document.querySelector('audio').load();
    // }
    // else if ((second >= 30) && (second <= 59)) {
    //     audioplay.pause();
    // }
    
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.01);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

// function alarm() {
//     // var second = now.getSeconds();
//     // angle = drawHand(pos);

//     var audio = document.getElementsByTagName("audio");
//     console.log(audio);
//     // for(angle=1; angle < 361; angle+=60) {
//     //     // if (angle=0 || angle=30 || angle/=30)
//     audio.play();
//     // }
// }

// // (alarm)();
// fun

// sound = document.querySelector('audio').play();
// setInterval(sound, 10000);
//setInterval(alarm, 4000);

// var hour = now.getHours();
// var alarm = Array.from(document.querySelectorAll(hour));
// array.forEach(element => {
    
// });

// ctx.font = "30px Helvetica";
// ctx.font.fillStyle = "white";
// ctx.textAlign = "center"
// ctx.strokeText("Hello World", canva.width/2, canva.height/2);

// var ctx = canva.getContext("2d");
// ctx.fillStyle = "#1E1E1E";
// ctx.fillRect(50,25,100,50);
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();