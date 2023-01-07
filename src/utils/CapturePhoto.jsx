// import "./styles.css";
import { useRef, useState } from "react";

export default function CapturePhoto(player) {
  const [imageDataURL, setImageDataURL] = useState(null);
  const cameraNumber = useRef(0);
  // const player = useRef();

  const initializeMedia = async () => {
    console.log('player---', player)
    setImageDataURL(null);

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        var getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    //Get the details of video inputs of the device
    const videoInputs = await getListOfVideoInputs();

    //The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: "environment"
            // deviceId: {
            //   exact: videoInputs[cameraNumber.current]?.deviceId
            // }
          }
        })
        .then((stream) => {
          player.current.srcObject = stream;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("The device does not have a camera");
    }
  };

  const capturePicture = () => {
    console.log('player---', player)
    var canvas = document.createElement("canvas");
    canvas.width = player.current.videoWidth;
    canvas.height = player.current.videoHeight;
    var contex = canvas.getContext("2d");
    contex.drawImage(player.current, 0, 0, canvas.width, canvas.height);
    player.current.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.log('canvas---', canvas);
    setImageDataURL(canvas.toDataURL());
  };

  const switchCamera = async () => {
    console.log("onload camera", cameraNumber.current);

    const listOfVideoInputs = await getListOfVideoInputs();

    // The device has more than one camera
    if (listOfVideoInputs.length > 1) {
      console.log("listOfVideoInputs---", listOfVideoInputs.length);
      if (player.current.srcObject) {
        player.current.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }

      // switch to second camera
      if (cameraNumber.current === 0) {
        console.log("second---", cameraNumber.current);
        cameraNumber.current = 1;
      }
      // switch to first camera
      else if (cameraNumber.current === 1) {
        console.log("first---", cameraNumber.current);
        cameraNumber.current = 0;
      }

      // Restart based on camera input
      initializeMedia();
    } else if (listOfVideoInputs.length === 1) {
      alert("The device has only one camera");
    } else {
      alert("The device does not have a camera");
    }
  };

  const getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    //Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  // const playerORImage = Boolean(imageDataURL) ? (
  //   <img src={imageDataURL} alt="cameraPic" />
  // ) : (
  //   <video
  //     ref={(refrence) => {
  //       player.current = refrence;
  //     }}
  //     autoPlay
  //   ></video>
  // );

  // return (
  //   <div className="App">
  //     {playerORImage}
  //     <button onClick={() => initializeMedia()}>Take Photo</button>
  //     <button onClick={() => capturePicture()}>Capture</button>
  //     {/* <button onClick={() => switchCamera()}>Switch</button> */}
  //   </div>
  // );
  return {
    initializeMedia, 
    capturePicture, 
    imageDataURL
  }
}
