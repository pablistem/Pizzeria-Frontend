import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-bg-profile py-5 px-2 roundend flex flex-col justify-center items-center gap-5 w-[40vw] h-[80vh] font-sans shadow-sm">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
