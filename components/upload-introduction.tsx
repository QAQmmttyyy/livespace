import Image from "next/image";
import { Button } from "./ui/button";

export const UploadIntroduction = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative w-full h-1/3">
        <Image
          src="undraw_upload.svg"
          alt="upload"
          className="object-contain"
          fill
        />
      </div>
      <p className="mt-8 mb-4">
        Please upload the file and start communicating!
      </p>
      <Button>Upload</Button>
    </div>
  );
};
