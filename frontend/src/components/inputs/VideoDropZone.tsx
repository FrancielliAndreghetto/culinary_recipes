import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface DropzoneProps {
  file: any;
  onFileChange: (file: File | null) => void;
}

const VideoDropZone: React.FC<DropzoneProps> = ({ file = null, onFileChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(file);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          setSelectedImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }

    onFileChange(file);
  };

  return (
    <div className="w-full h-full flex">
      <div className="extraOutline p-4 w-max bg-whtie m-auto rounded-lg">
        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
          <svg className="text-black w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
          <div className="input_field flex flex-col w-max mx-auto text-center">
            <label>
              <input className="text-sm cursor-pointer w-36 hidden" type="file" multiple />
              <div className="text bg-[rgba(225,152,83,0.7)] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-bg-[rgba(225,152,83,0.7)]">Select</div>
            </label>

            <div className="title text-black uppercase">or drop files here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDropZone;