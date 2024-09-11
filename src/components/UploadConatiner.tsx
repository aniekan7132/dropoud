import React, { useState } from "react";
import UploadVideos from "./UploadVideos";
import ModalDetails from "./ModalDetails";
import { useDispatch } from "react-redux";
import { setUploadModal } from "../features/generalSlice";

// interface Props {
//   setUploadVideos: (picked: boolean) => void;
// }

// { setUploadVideos }: Props

function UploadConatiner() {
  const [file, setFile] = useState<File | null>(null);

  const [filePicked, setFilePicked] = useState(false);

  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(setUploadModal(false))
  };

  return filePicked ? (
    <ModalDetails file={file} closeModal={closeModal} />
  ) : (
    <UploadVideos
      setFile={setFile}
      closeModal={closeModal}
      setFilePicked={setFilePicked}
    />
  );
}

export default UploadConatiner;
