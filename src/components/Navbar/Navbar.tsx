import { Link } from 'react-router-dom';
import iconCart from '../../assets/Navbar icons/cart_icon.svg';
import Menu from '../Menu/Menu';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import useLogout from '../../hooks/useLogout';
import useAuth from '../../hooks/useAuth';
export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { accessToken } = useAuth();
  const { setLogout } = useLogout({});

  const toggleCart = () => {
    setTimeout(() => {
      setCartOpen(!cartOpen);
    }, 300);
  };

  return (
    <header>
      <nav className="fixed top-0 h-20 w-[100%] mx-auto overflow-hidden flex items-center justify-between bg-bubble-gum">
        <input
          type="checkbox"
          name="checkbox"
          id="menu"
          data-cy="burger-menu"
          className="peer hidden"
        />
        <label
          htmlFor="menu"
          id="label-menu"
          className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all delay-300 z-50 max-w-screen-lg: ml-10"
        ></label>
        <h1>Pizzeria Don Remolo</h1>
        <Menu /> {/* Aquí se utiliza el componente Menu */}
        {!accessToken && <Link to={'/login'}>Login</Link>}
        {accessToken && <div onClick={() => setLogout()} className='cursor-pointer'>Logout</div>}
        <div className="relative">
          <button
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={toggleCart}
          >
            <img src={iconCart} alt="Shopping Cart" className="h-6 w-6 mr-2" />
            <p className="text-text-paragraph">0</p>
            {cartOpen ? true : false}
          </button>
        </div>
        {cartOpen && <Cart />}
      </nav>
    </header>
  );
};
