import iconCart from '../../assets/Home images/cart_icon.svg';
import { Menu } from '../Menu/Menu';
export const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 h-20 w-[100%] mx-auto overflow-hidden flex items-center justify-between bg-bubble-gum">
        <input
          type="checkbox"
          name="checkbox"
          id="menu"
          className="peer hidden "
        />

        <label
          htmlFor="menu"
          className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all delay-300 z-50 max-w-screen-lg: ml-10"
        ></label>
        <h1>Pizzeria Don Remolo</h1>
        <Menu />
        <div className="w-6 max-w-[1.5rem] max-w-screen-lg: mr-10">
          <a href="#">
            <img
              src={iconCart}
              alt="Menu icon"
              className="w-full max-sm:hidden"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};