import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CapturePhoto from './CapturePhoto';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({openModal, setOpenModal}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
//   const [imageDataURL, setImageDataURL] = React.useState(null);
  const player = React.useRef();
  const [initializeMedia, capturePicture, imageDataURL] = CapturePhoto(player);

  const handleClose = () => {
      setOpen(false);
      setOpenModal(false);
  }

  React.useEffect(() => {
      if (openModal) {
        handleOpen();
      }
  }, [openModal])

  const playerORImage = Boolean(imageDataURL) ? (
    <div style={{width: '200px', height: '200px', margin: '10px'}} >
        <img src={imageDataURL} alt="cameraPic" style={{width: '200px', height: '200px'}}/>
    </div>  
    
  ) : (
    <video
      ref={(refrence) => {
        player.current = refrence;
      }}
      style={{width: '200px', height: '200px'}}
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
          <div className="App">
            <Grid direction={'row'} justifyContent={'center'} alignContent={'center'}>
                {playerORImage}
            </Grid>   
            <Grid direction={'column'} container spacing={1}>
                <Button variant="contained" style={{marginBottom: '10px'}} onClick={() => initializeMedia()}>Take Front ID</Button>
                <Button variant="contained" onClick={() => capturePicture()}>Capture Front ID</Button>
                {/* <button onClick={() => switchCamera()}>Switch</button> */}
            </Grid>
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
