import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange, onRemove, value }) => {
  const onUpload = (result) => {
    onChange(result.info.secure_url);
    toast.success("Tải ảnh lên thành công");
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        {value && (
          <div
            key={value}
            className="relative w-[300px] h-[400px] rounded-lg border-2"
          >
            <div className="absolute top-0 right-0 z-10">
              <button
                onClick={() => onRemove(value)}
                size="sm"
                className="bg-red-600 p-1 rounded-md"
              >
                <FaRegTrashAlt size={24} />
              </button>
            </div>
            <Image
              src={value}
              alt="coverNovel"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        )}
      </div>
      {!value && (
        <CldUploadWidget
          uploadPreset="covers"
          onUpload={onUpload}
          options={{
            clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
            cropping: true,
            croppingAspectRatio: 3 / 4,
            showSkipCropButton: false,
          }}
        >
          {({ open }) => {
            return (
              <button
                onClick={() => open()}
                className="text-gray-300 w-[300px] h-[400px] rounded-lg border-[1px] border-gray-500 hover:border-gray-300"
              >
                Chọn ảnh bìa
              </button>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
};

export default ImageUpload;
