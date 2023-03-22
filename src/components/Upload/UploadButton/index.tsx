import React from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { useEffect, useState } from "react";

const UploadButton = () => {
    const [loading, setLoading] = useState<boolean>(false);

  const uploadFile = (e): void => {
    setLoading(true)
    const file = e.target.files[0]
    console.log(file)
    
    setTimeout(() => {
        setLoading(false)
    }, 3000);
  };

  const clickHandler = (): void => {
    const handler = document.getElementById("inputFile") as HTMLElement
    handler.click();
  }
  useEffect((): void => {
    console.log('loading', loading)
  }, [loading])

  return (
    <div>
      <Center
        cursor={"pointer"}
        border={"1px"}
        color={"rgba(0, 0, 0, 0.08)"}
        borderRadius={"12px"}
        height={"66px"}
        width={"66px"}
        onClick={clickHandler}
      >
        {!loading ? <HiUpload size={22} color={"#B0BABF"} /> : <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='primary.main'
            size='xl'
            />}
      </Center>
      <input
        id="inputFile"
        disabled={loading}
        style={{ display: "none" }}
        type="file"
        accept="application/pdf"
        onChange={uploadFile}
      />
    </div>
  );
};

export default UploadButton;
