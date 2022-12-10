// Create the button element
var button = document.createElement('button');
button.id = 'raise-hand-button';
button.innerHTML = "✋";
button.style.fontSize = "60px";
button.style.backgroundColor = "white";
button.style.cursor = 'pointer';
button.style.position = 'absolute';
button.style.top = '70%';
button.style.left = '93%';
button.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(button);

var button2 = document.createElement("button");
button2.id = 'listen-button';
button2.innerHTML = "&#x1F442";
button2.style.fontSize = "60px";
button2.style.backgroundColor = "white";
button2.style.cursor = 'pointer';
button2.style.position = 'absolute';
button2.style.top = '70%';
button2.style.left = '13%';
button2.style.transform = 'translate(-50%, -50%)';
//make hidden
button2.style.visibility = "hidden";
document.body.appendChild(button2);

const API_KEY = "AIzaSyBd71N7I3Kw5IlHcIcYM4DvigtHFoykhVs";

async function getVideoID(videoUrl) {
  // Get the video ID from the URL
  const videoId = videoUrl.split("?v=")[1];
  return videoId;
}

document.getElementById('raise-hand-button').addEventListener('click', async function () {
  console.log("Button clicked")
  //make button2 visible
  button2.style.visibility = "visible";
  var currentURL = window.location.href;
  videoId = await getVideoID(currentURL);
  console.log("Hitting API");
  fetch(`https://pupil.nolanclement.repl.co/transcript/${videoId}`)
  .then(response => response.json())
  .then(data => {
    // Print the transcript
    console.log(data.transcript);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
});

document.getElementById('listen-button').addEventListener('click', async function () {
  console.log("todo: listen to audio");
  /*
  audioStream = navigator.mediaDevices.getUserMedia({ audio: true });
  const mediaRecorder = new MediaRecorder(audioStream);
  // Create a new Blob to store the audio data
  let audioBlob;
  // Start recording the audio
  mediaRecorder.start();
  // Listen for the dataavailable event, which is fired whenever the
  // MediaRecorder has captured audio data
  mediaRecorder.addEventListener('dataavailable', (event) => {
    // Create a new Blob from the audio data
    audioBlob = new Blob([event.data], { type: 'audio/ogg' });
  });
  // Stop recording the audio
  mediaRecorder.stop();
  console.log(audioBlob);
  */
});
