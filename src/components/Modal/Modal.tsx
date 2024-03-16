import { ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-bg-profile py-5 px-2 roundend flex flex-col justify-center items-center gap-5 lg:w-[50vw] md:w-[60vw] w-[80%] h-[80vh] font-sans shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default Modal;
