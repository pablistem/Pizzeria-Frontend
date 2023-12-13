import { Navbar } from '../components/Navbar/Navbar';
import announce from '../assets/Navbar icons/promos img.jpg';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';
import fondo from '../assets/imagen_seleccion.jpg';
import ImageGallery from '../components/Image gallery/Imagegallery';
export const Home = () => {
  return (
    <div className="">
      <Navbar />
      <section className="grid gap-4 grid-cols-2 p-4 place-content-around max-sm:grid-cols-1">
        <div>
          <span className="max-sm:mt-20 lg: flex justify-center">
            <img
              src={announce}
              className=" rounded-lg max-sm:w-11/12 items-center "
            />
          </span>

          <div className=" max-sm: flex items-center max-lg:grid grid-cols-3 grid-rows-2 gap-3 mt-6">
            <div className="w-full max-sm: row-span-2 col-span-2">
              <img
                src={jamonymorron}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
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
      <ImageGallery />
    </div>
  );
};
