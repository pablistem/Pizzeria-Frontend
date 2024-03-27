import { useState } from 'react';
import icon from '../../assets/icon_pizza_shop.jpg';

const UploadImage = ({ avatar, file, onChange, ...props }) => {
  const [preview, setPreview] = useState<ArrayBuffer | string | null>(null);

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    }
  }

  const avatarFound = avatar === null ? icon : avatar;
  const imageLoaded = preview === null ? avatarFound : preview.toString();

  return (
    <>
      <img
        src={imageLoaded}
        alt="Pizzería Don Remolo Logo"
        className="relative w-48 h-32 rounded-full opacity-50"
      />
      <div className="absolute bg-light-pink rounded-full start-11 top-11">
        <label htmlFor="avatar">
          <svg
            className="w-10 h-10 p-2 cursor-pointer"
            data-slot="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
          </svg>
        </label>
        <input
          {...props}
          type="file"
          style={{ display: 'none' }}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default UploadImage;
