import profileIcon from '../../assets/Menu icons/profile_icon.jpg';
import orderIcon from '../../assets/Menu icons/order_icon.jpg';
import couponIcon from '../../assets/Menu icons/coupon_icon.jpg';
import discountIcon from '../../assets/Menu icons/discount_icon.jpg';

export const Menu = () => {
  return (
    <div className="fixed inset-0 bg-background-navbar h-full -translate-x-full peer-checked:translate-x-0 transition-transform delay-300 max-w-xs max-lg: top-16">
      <ul className="absolute inset-x-0 top-24 mx-auto h-max grid gap-6 font-bold max-sm: ml-5">
        <li className="flex items-center">
          <img src={profileIcon} alt="Profile icon" className="w-[13%]" />
          <a href="#">Mi perfil</a>
        </li>
        <li className="flex items-center">
          <img src={orderIcon} alt="Order icon" className="w-[13%]" />
          <a href="#">Mis pedidos</a>
        </li>
        <li className="flex items-center">
          <img src={discountIcon} alt="Discount icon" className="w-[13%]" />
          <a href="#">Descuentos</a>
        </li>
        <li className="flex items-center">
          <img src={couponIcon} alt="Coupon icon" className="w-[13%]" />
          <a href="#">Cupones</a>
        </li>
      </ul>
    </div>
  );
};
