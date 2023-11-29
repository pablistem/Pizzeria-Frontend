// import { Hamburguermenu } from '../Menu/Menu';
//import iconMenu from '../../assets/icon-hamburger.svg';
import iconCart from '../../assets/cart_icon.svg';

export const Sidebar = () => {
  return (
    <header>
      <nav className="h-20 w-[100%] mx-auto overflow-hidden flex items-center justify-between bg-bubble-gum">
        {/* <div className="w-6 max-w-[1.5rem]">
          <img src={iconMenu} alt="Menu icon" className="w-full" />
        </div> */}

        <input
          type="checkbox"
          name="checkbox"
          id="menu"
          className="peer hidden "
        />
        <label
          htmlFor="menu"
          className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 max-w-screen-lg: ml-10"
        ></label>
        <h1>Pizzeria Don Remolo</h1>
        <div className="fixed inset-0 bg-bubble-gum w-1/3 h-96 -translate-x-full peer-checked:translate-x-0 transition-transform">
          <ul className="absolute inset-x-0 top-24 w-[90%] mx-auto h-max grid gap-6 font-bold">
            <li>
              <a href="#">Mi perfil</a>
            </li>
            <li>
              <a href="#">Mis pedidos</a>
            </li>
            <li>
              <a href="#">Descuentos</a>
            </li>
            <li>
              <a href="#">Cupones</a>
            </li>
          </ul>
        </div>
        <div className="w-6 max-w-[1.5rem] max-w-screen-lg: mr-10">
          <a href="#">
            <img src={iconCart} alt="Menu icon" className="w-full" />
          </a>
        </div>
      </nav>
    </header>
    // <div>
    //   <h1 className="text-3xl bg-bubble-gum">Hola mundo</h1>
    // </div>
  );
};
{
  /* <div className="w-full h-screen bg-bubble-gum mx-auto flex">
<h1 className="text-3xl">Hola mundo</h1>
</div> */
}
