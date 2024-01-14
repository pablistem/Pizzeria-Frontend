// Menu.tsx
import { useEffect, useState } from 'react';
import profileIcon from '../../assets/Menu icons/profile_icon.jpg';
import orderIcon from '../../assets/Menu icons/order_icon.jpg';
import couponIcon from '../../assets/Menu icons/coupon_icon.jpg';
import discountIcon from '../../assets/Menu icons/discount_icon.jpg';
import UnauthenticatedProfile from '../../pages/UnauthenticatedProfile';
import Profile from '../../pages/Profile';
import { getUserData } from '../../services/user.api';
import { IUser } from '../../types/types';

const Menu = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserData();
        setUserData(result);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="fixed flex  inset-0 bg-bubble-gum w-1/2 h-full -translate-x-full peer-checked:translate-x-0 transition-transform delay-300 max-w-xs max-lg: top-16">
      {selectedSection === '' && (
        <ul className="absolute inset-x-0 top-24 w-[90%] mx-auto h-max grid gap-6 font-bold max-sm: ml-5">
          <li className="flex items-center">
            <img src={profileIcon} alt="Profile icon" className="w-[13%]" />
            <a
              onClick={() => setSelectedSection('profile')}
              href="#"
              data-cy="my-profile"
            >
              Mi perfil
            </a>
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
            <img
              src={couponIcon}
              alt="Coupon icon"
              className="max-md:w-[%21]"
            />
            <a href="#">Cupones</a>
          </li>
        </ul>
      )}
      {userData && selectedSection === 'profile' && (
        <Profile
          onShowMenuAgain={() => setSelectedSection('')}
          user={userData}
        />
      )}
      {!userData && selectedSection === 'profile' && (
        <UnauthenticatedProfile
          onShowMenuAgain={() => setSelectedSection('')}
        />
      )}
    </div>
  );
};

export default Menu;
