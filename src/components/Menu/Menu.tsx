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

  const menuItems = [
    { icon: profileIcon, label: 'Mi perfil', section: 'profile' },
    { icon: orderIcon, label: 'Mis pedidos', section: '' }, //orders
    { icon: discountIcon, label: 'Descuentos', section: '' }, //discounts
    { icon: couponIcon, label: 'Cupones', section: '' }, //coupons
  ];

  return (
    <div className="fixed flex  inset-0 bg-bubble-gum w-1/2 h-full -translate-x-full peer-checked:translate-x-0 transition-transform delay-300 max-w-xs max-lg: top-16">
      {selectedSection === '' && (
        <ul className="absolute inset-x-0 top-24 w-[90%] mx-auto h-max grid gap-6 font-bold max-sm: ml-5">
          {menuItems.map((item) => (
            <li key={item.section} className="flex items-center">
              <img
                src={`${item.icon}`}
                alt={`${item.label} icon`}
                className="max-md:w-[%21]"
              />
              <a
                onClick={() => setSelectedSection(item.section)}
                href="#"
                data-cy={item.section}
              >
                {item.label}
              </a>
            </li>
          ))}
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
