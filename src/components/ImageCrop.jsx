import { useState } from "react";
import Cropper from "react-easy-crop";

const ImageCrop = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [customCrop, setCustomCrop] = useState("");

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // console.log(croppedArea, croppedAreaPixels);
    setCustomCrop(
      `c_crop,h_${croppedAreaPixels.height}w_${croppedAreaPixels.width},x_${croppedAreaPixels.x},y_${croppedAreaPixels.y}`
    );
  };

  const handleUpload = async () => {
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "covers");

    try {
      const response = await fetch(
        // `https://api.cloudinary.com/v1_1/read-novel/image/upload/${customCrop}`,
        `https://api.cloudinary.com/v1_1/read-novel/image/upload`,
        {
          method: "POST",
          body: formData,
          // headers: {
          //   "X-Unique-Upload-Id": uniqueUploadId,
          //   "Content-Range": contentRange,
          // },
        }
      );

      console.log("Uploaded image URL:", response.body);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <div className="p-10">
        <input type="file" accept="image/*" onChange={onSelectFile} />
        {image && (
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={3 / 4}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        )}
      </div>
      <button className="mt-96" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default ImageCrop;
