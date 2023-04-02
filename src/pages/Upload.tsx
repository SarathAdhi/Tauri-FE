import { FileUploader } from "react-drag-drop-files";
import { PageLayout } from "../common/components/layouts/PageLayout";
import { useState } from "react";

const fileTypes = ["JPG", "PNG", "GIF"];

const Upload = () => {
  const [file, setFile] = useState<Blob>();
  const handleChange = (file: Blob) => {
    setFile(file);
  };

  return (
    <PageLayout title="Upload" className="grid place-content-center">
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </PageLayout>
  );
};

export default Upload;
