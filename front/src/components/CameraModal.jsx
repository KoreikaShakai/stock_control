import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Box, Modal, IconButton, TextField } from "@mui/material";
import dayjs from "dayjs";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { atomReData } from "./stock/atoms";
import { atomOpen } from "./header/atoms";
import { useAtom } from "jotai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyItems: "center",
};

export function CameraModal() {
  const [reData, setRedata] = useAtom(atomReData);
  const [open, setOpen] = useAtom(atomOpen);
  const webCamRef = useRef(null);
  const [name, setName] = useState("");

  const videoConstraints = {
    facingMode: "environment",
  };

  const onClickScreenShot = useCallback(async () => {
    const image = webCamRef.current?.getScreenshot();
    const blob = atob(image.replace(/^.*,/, ""));
    let buffer = new Uint8Array(blob.length);
    for (let i = 0; i < blob.length; i++) {
      buffer[i] = blob.charCodeAt(i);
    }
    const date = dayjs();
    const timeStamp = date.format("YYYY-MM-DD HH:mm:ss");
    const user_id = await (async () => {
      const reqUser = await fetch("/api/firebase/authUser");
      const userJson = await reqUser.json();
      return userJson.uid;
    })();

    const file = new File(
      [buffer.buffer],
      `${user_id}_${timeStamp}_image.jpeg`.replace(/\s/, "_"),
      {
        type: "image/jpeg",
      },
    );

    let formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("user_id", user_id);
    formData.append("name", name);
    await fetch(`/photos`, {
      method: "POST",
      body: formData,
    });
    // setRedata(()=>!reData);
    setRedata(!reData);
    setOpen(false);
  }, [webCamRef]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setName("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h2>撮影画面</h2>
          </div>
          <div>
            <Webcam
              audio={false}
              disablePictureInPicture={true}
              screenshotFormat={"image/jpeg"}
              videoConstraints={videoConstraints}
              width={"100%"}
              ref={webCamRef}
            />
          </div>
          <div>
            <IconButton
              size="large"
              color="primary"
              aria-label="capture"
              sx={{ backgroundColor: "lightgrey" }}
              disabled={name === ""}
            >
              <AddAPhotoIcon
                fontSize="large"
                content={"撮影"}
                onClick={onClickScreenShot}
              />
            </IconButton>
            <TextField
              placeholder="名前を入力してください"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
