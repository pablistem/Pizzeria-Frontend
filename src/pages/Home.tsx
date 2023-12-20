// import { Navbar } from '../components/Navbar/Navbar';
import announce from '../assets/Navbar icons/promos img.jpg';
import ImageGallery from '../components/Image_gallery/Imagegallery';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';
//import fondo from '../assets/imagen_seleccion.jpg';
export const Home = () => {
  return (
    <div className="flex justify-center items-center pt-20 bg-bubble-gum">
      <div className="container mx-auto grid max-md: grid-cols-1 lg:grid-cols-2">
        <section className="grid gap-4 p-4 items-center place-content-around max-sm:grid-cols-1">
          <div className="grid grid-cols-5 grid-rows-6 gap-3 ">
            <div className="col-span-5 pb-4">
              <img src={announce} alt="" className="rounded-lg w-full h-full" />
            </div>
            <div className="col-span-3 row-span-3">
              <img
                src={jamonymorron}
                alt="Imagen de pizza de jamon"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src={gaseosa}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-3">
              <img
                src={almendrado}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-3 row-span-2">
              <img
                src={empanada_atun}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* <div className=" grid grid-cols-1 max-sm:hidden">
            <img src={fondo} alt="" className="w-full" />
          </div> */}
        </section>
        <section>
          <h2 className="">Recomendaciones</h2>
          <ImageGallery />
        </section>
      </div>
    </div>
  );
};
