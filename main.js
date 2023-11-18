function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Rnp9rMCcI/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog') 
    img1 = document.getElementById('gato')
    img2 = document.getElementById('vaca')
    img3 = document.getElementById('leao')

    if (results[0].label == "latido") {
      img.src = 'dog.gif';
      img1.src = 'gato.png';
      img2.src = 'vaca.jpg';
      img3.src = 'leao.jpg';
    } else if (results[0].label == "miado") {
      img.src = 'dog.png';
      img1.src = 'gato.gif';
      img2.src = 'vaca.jpg';
      img3.src = 'leao.jpg';
    } else if (results[0].label == "mugido") {
      img.src = 'dog.png';
      img1.src = 'gato.png';
      img2.src = 'vaca.gif';
      img3.src = 'leao.jpg';
    } else if (results[0].label == "rugido") {
      img.src = 'dog.png';
      img1.src = 'gato.png';
      img2.src = 'vaca.jpg';
      img3.src = 'leao.gif';
    }else{
      img.src = 'dog.png';
      img1.src = 'gato.png';
      img2.src = 'vaca.gif';
      img3.src = 'leao.jpg';
     
    }
  }
}
