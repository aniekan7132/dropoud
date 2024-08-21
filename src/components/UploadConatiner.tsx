import React, { useState } from "react";
import UploadVideos from "./UploadVideos";
import ModalDetails from "./ModalDetails";

interface Props {
  setUploadVideos: (picked: boolean) => void;
}

function UploadConatiner({ setUploadVideos }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const [filePicked, setFilePicked] = useState(false);
  const closeModal = () => {
    setUploadVideos(false);
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
