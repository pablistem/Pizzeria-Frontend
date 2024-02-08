import profileIcon from '../../assets/Menu icons/profile_icon.jpg';
import orderIcon from '../../assets/Menu icons/order_icon.jpg';
import couponIcon from '../../assets/Menu icons/coupon_icon.jpg';
import discountIcon from '../../assets/Menu icons/discount_icon.jpg';
import { useContext } from 'react';
import { valueContext } from '../../App';
export const Menu = () => {
  const { prueba, setPrueba } = useContext(valueContext);
  return (
    <div className="fixed inset-0 bg-bubble-gum w-1/2 h-full -translate-x-full peer-checked:translate-x-0 transition-transform delay-300 md:w-[38%] max-lg:w-[50%] top-16">
      <ul className="absolute inset-x-0 top-24 w-[90%] mx-auto h-max grid gap-6 font-bold max-sm: ml-5">
        <li className="flex items-center">
          <img
            src={profileIcon}
            alt="Profile icon"
            className="max-sm:w-[18%] max-md:w-[21%]"
          />
          <a href="#">Mi perfil</a>
        </li>
        <li className="flex items-center">
          <img src={orderIcon} alt="Order icon" className="max-md:w-[%21]" />
          <a href="#">Mis pedidos</a>
        </li>
        <li className="flex items-center">
          <img
            src={discountIcon}
            alt="Discount icon"
            className="max-md:w-[%21]"
          />
          <a href="#">Descuentos</a>
        </li>
        <li className="flex items-center">
          <img src={couponIcon} alt="Coupon icon" className="max-md:w-[%21]" />
          <a href="#">Cupones</a>
        </li>
      </ul>
      <button
        onClick={() => {
          setPrueba([...prueba, 1]);
        }}
      >
        Agregar productos
      </button>
    </div>
  );
};
