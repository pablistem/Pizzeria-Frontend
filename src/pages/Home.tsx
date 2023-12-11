import { Navbar } from '../components/Navbar/Navbar';
import announce from '../assets/Navbar icons/promos img.jpg';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
//import jamonymorron from '../assets/Food/jamonymorron.jpg';
import pastry from '../assets/Navbar icons/pastry icon.jpg';
import pizza from '../assets/Navbar icons/pizza icon.jpg';
import drink from '../assets/Navbar icons/drink icon.jpg';
import icecream from '../assets/Navbar icons/icecream icon.jpg';
import discount from '../assets/Menu icons/discount_icon.jpg';
import fondo from '../assets/imagen_seleccion.jpg';
export const Home = () => {
  return (
    <div className="">
      <Navbar />
      {/* <span className="flex justify-center mt-28">
        <img
          src={announce}
          className=" rounded-lg max-sm:w-11/12 items-center "
        />
      </span> */}
      <div className="mt-24">
        <ul className="flex max-sm:justify-start max-lg: justify-center space-x-5">
          <li>
            <img src={discount} alt="" className="w-[70%]" />
          </li>
          <li className="flex">
            <img src={pizza} alt="" className="w-[60%]" />
            <p>Pizzas</p>
          </li>
          <li>
            <img src={pastry} alt="" className="w-[70%]" />
          </li>
          <li>
            <img src={icecream} alt="" className="w-[90%]" />
          </li>
          <li>
            <img src={drink} alt="" className="w-[70%]" />
          </li>
        </ul>
      </div>
      <section className="grid gap-4 grid-cols-2 p-4 place-content-around max-sm:grid-cols-1">
        <div>
          <span className="max-sm:hidden lg: flex justify-center">
            <img
              src={announce}
              className=" rounded-lg max-sm:w-11/12 items-center "
            />
          </span>

          <div className=" max-sm: flex items-center max-lg:grid grid-cols-3 grid-rows-2 gap-3 mt-6">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <div className="w-[100%] row-span-2 col-span-2">
              <img
                src={jamonymorron}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div> */}
            <div className="w-[100%]">
              <img src={gaseosa} alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="w-[100%]">
              <img
                src={empanada_atun}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[100%] col-span-2 row-span-1">
              <img
                src={almendrado}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="max-sm:hidden lg:flex items-center">
          <img src={fondo} alt="" />
        </div>
      </section>
    </div>
  );
};
