prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML="<img id='pic' src='" + data_uri + "'>";
    });
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mfYt8b-iJ/model.json", modelLoaded)

function modelLoaded(){
    console.log("Model Loaded!!")
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata1 = "The 1st prediction is " + prediction1;
    speakdata2 = "The 2st prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
}

function checksnap(){
    img = document.getElementById("pic");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(prediction1 == "WINGS OF FIRE"){
            document.getElementById("emoji1").innerHTML="&#128080;";
            document.getElementById("hand1").innerHTML="Wings of Fire!!";
        }
        else if(prediction1 == "SUPERB"){
            document.getElementById("emoji1").innerHTML="&#128076;";
            document.getElementById("hand1").innerHTML="Super!!";
        }
        else if(prediction1 == "ALEIN HAND"){
            document.getElementById("emoji1").innerHTML="&#128406;";
            document.getElementById("hand1").innerHTML="ALIEN!!";
        }
        else if(prediction1 == "GOOD"){
            document.getElementById("emoji1").innerHTML="&#128077;";
            document.getElementById("hand1").innerHTML="GOOD JOB!!";
        }
        else{
            document.getElementById("emoji1").innerHTML="&#128078;";
            document.getElementById("hand1").innerHTML="BAD!! BOO!!";
        }

        if(prediction2 == "WINGS OF FIRE"){
            document.getElementById("emoji2").innerHTML="&#128080;";
            document.getElementById("hand2").innerHTML="Wings of Fire!!";
        }
        else if(prediction2 == "SUPERB"){
            document.getElementById("emoji2").innerHTML="&#128076;";
            document.getElementById("hand2").innerHTML="Super!!";
        }
        else if(prediction2 == "ALEIN HAND"){
            document.getElementById("emoji2").innerHTML="&#128406;";
            document.getElementById("hand2").innerHTML="ALIEN!!";
        }
        else if(prediction2 == "GOOD"){
            document.getElementById("emoji2").innerHTML="&#128077;";
            document.getElementById("hand2").innerHTML="GOOD JOB!!";
        }
        else{
            document.getElementById("emoji2").innerHTML="&#128078;";
            document.getElementById("hand2").innerHTML="BAD!! BOO!!";
        }
    }
}