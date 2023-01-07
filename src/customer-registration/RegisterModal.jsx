import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CapturePhoto from "../utils/CapturePhoto";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ openModal, setOpenModal, setDetailsFromPhoto }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  //   const [imageDataURL, setImageDataURL] = React.useState(null);
  const frontPlayer = React.useRef();
  const backPlayer = React.useRef();
  const {initializeMedia: frontInitializeMedia, capturePicture: frontCapturePicture, imageDataURL: frontImageDataURL} = CapturePhoto(frontPlayer);
  const {initializeMedia: backInitializeMedia, capturePicture: backCapturePicture, imageDataURL: backImageDataURL} = CapturePhoto(backPlayer);

  const [frontImage, setFrontImage] = React.useState();
  const [backImage, setBackImage] = React.useState();
  const [fronOrBack, setFrontOrBack] = React.useState();

  useEffect(() => {
    if (frontImageDataURL && fronOrBack === "front") {
      setFrontImage(frontImageDataURL);
    }
  }, [frontImageDataURL, fronOrBack]);

  useEffect(() => {
    if (backImageDataURL && fronOrBack === "back") {
      setBackImage(backImageDataURL);
    }
  }, [backImageDataURL, fronOrBack]);

  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  React.useEffect(() => {
    if (openModal) {
      handleOpen();
    }
  }, [openModal]);

  const submitHandler = () => {
      //do api call here use frontImage, backImage properties

      // on Api Success
      // setDetailsFromPhoto(response)
      
  }

  const frontplayerORImage = Boolean(frontImageDataURL) ? (
    <div style={{ marginBottom: "15px" }}>
      <img src={frontImage} alt="cameraPic" style={{ width: "200px" }} />
    </div>
  ) : (
    <video
      ref={(refrence) => {
        frontPlayer.current = refrence;
      }}
      style={{ width: "200px", marginBottom: "10px" }}
      autoPlay
    ></video>
  );

  const backplayerORImage = Boolean(backImageDataURL) ? (
    <div style={{ marginBottom: "15px" }}>
      <img src={backImage} alt="cameraPic" style={{ width: "200px" }} />
    </div>
  ) : (
    <video
      ref={(refrence) => {
        backPlayer.current = refrence;
      }}
      style={{ width: "200px", marginBottom: "10px" }}
      autoPlay
    ></video>
  );

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Grid container direction="row"  spacing={1} mt={2}>
            <Grid item sm={6}>
              <div className="front-photo" style={{height: '170px'}}>{frontplayerORImage}</div>
              <Grid
                direction={"column"}
                container
                style={{ width: "200px" }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    frontInitializeMedia();
                    setFrontOrBack("");
                    setFrontImage('');
                  }}
                >
                  Take Front ID
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    frontCapturePicture();
                    setFrontOrBack("front");
                  }}
                >
                  Capture Front ID
                </Button>
                {/* <button onClick={() => switchCamera()}>Switch</button> */}
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <div className="back-photo" style={{height: '170px'}}>{backplayerORImage}</div>
              <Grid
                direction={"column"}
                container
                style={{ width: "200px" }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    backInitializeMedia();
                    setFrontOrBack("");
                    setBackImage('');
                  }}
                >
                  Take Back ID
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    backCapturePicture();
                    setFrontOrBack("back");
                  }}
                >
                  Capture Back ID
                </Button>
                {/* <button onClick={() => switchCamera()}>Switch</button> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid container position={'fixed'} bottom={15} height={30} right={0}>
            <Grid item position={'absolute'} bottom={0} right={15}>
                <Button variant="contained" size="medium" onClick={() => submitHandler()}>continue</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
