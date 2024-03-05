import ModalIcon from '../../assets/Modal icons/icons8-flecha-derecha-30.png';

const OrderModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="justify-center w-[100%] flex flex-col gap-4">
      <b className="text-base mr-7">Detalles de la entrega</b>
      <div className="flex-col flex gap-7 justify-center w-[100%]">
        <div className="flex justify-between items-center ml-3">
          <div>
            <b>Calle random 123</b>
            <p>Dirección</p>
          </div>
          <img src={ModalIcon} alt="Modal Icon" className="w-6 h-6 mr-3" />
        </div>
        <div className="flex justify-between items-center ml-3">
          <div>
            <b>****123 | Mastercard</b>
            <p>Forma de pago</p>
          </div>
          <img src={ModalIcon} alt="Modal Icon" className="w-6 h-6 mr-3" />
        </div>
        <div className="flex justify-between items-center ml-3">
          <div>
            <b> -$500</b>
            <p>Cupón</p>
          </div>
          <img src={ModalIcon} alt="Modal Icon" className="w-6 h-6 mr-3" />
        </div>
      </div>
      <b>Resumen de tu pedido</b>
      <div className="w-[100%] flex flex-col gap-3">
        <div className="flex justify-around w-[100%]">
          <p>Subtotal</p>
          <span className="font-bold">$9100</span>
        </div>
        <div className="flex justify-around w-[100%]">
          <p>Descuento</p>
          <span className="font-bold"> -$500</span>
        </div>
        <div className="flex justify-around w-[100%]">
          <b>Total</b>
          <b>$9400</b>
        </div>
      </div>
      <div className="justify-center items-center flex w-[100%]">
        <button
          type="button"
          className="w-[90%] rounded-full bg-logo-orange text-white p-1"
          onClick={closeModal}
        >
          Pedir ($4000)
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
