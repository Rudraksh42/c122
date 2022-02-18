x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_tri = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening Please Speak";
    recognition.start()
}

recognition.onresult = function (event) {

    console.log(event);
    content = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "Speech Has Been Recognited as" + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started Drawing The Circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started Drawing The Rectangle";
        draw_rect = "set";
    }
    if (content == "triangle") {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started Drawing The Triangle ";
        draw_tri = "set";
    }
}

function setup() {

    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_circle == "set") {

        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle Is Done";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        length1 = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 100);
        rect(x, y, length1, height)
        draw_rect = "";
        document.getElementById("status").innerHTML = "Rectangle Is Done";

    }
    if (draw_tri == "set") {

        
        triangle(300, 100, 320, 100, 310, 80);
        draw_tri = "";
        document.getElementById("status").innerHTML = "Rectangle Is Done";

    }

}

