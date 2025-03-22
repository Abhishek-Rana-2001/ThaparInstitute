import React, { useRef } from "react";
import Button from "./Button";
import { X } from "lucide-react";

type ButtonProps = {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  courseId: string;
  uploadCertificate: (params: {
    courseId: string;
    file: File | null;
  }) => Promise<any>;
};

const UploadButton = ({
  file,
  setFile,
  courseId,
  uploadCertificate,
}: ButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    inputRef?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        onChange={handleChange}
      />
      <Button variant="primary" size="small" onClick={handleClick}>
        Upload Certificate
      </Button>
      {file && (
        <td className="p-4 flex gap-4 items-center ">
          <span className="flex gap-2 items-center">
            {file.name}{" "}
            <X
              size={20}
              className="text hover:cursor-pointer hover:scale-110 transition-all duration-100 ease-in"
              onClick={handleDeleteFile}
            />
          </span>{" "}
          <Button
            size="small"
            variant="primary"
            onClick={() => uploadCertificate({ courseId, file })}
          >
            Upload
          </Button>
        </td>
      )}
    </div>
  );
};

export default UploadButton;
