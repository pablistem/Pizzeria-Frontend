// import { Navbar } from '../components/Navbar/Navbar';
// import announce from '../assets/Navbar icons/promos img.jpg';
//import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';
import fondo from '../assets/imagen_seleccion.jpg';
export const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto">
        <section className="grid gap-4 grid-cols-2 p-4 items-center place-content-around max-sm:grid-cols-1">
          <div className="grid grid-rows-8 grid-cols-3 grid-flow-col gap-2">
            <div className=" grid row-[span_5_/_span_5] col-span-2 items-center">
              <img
                src={jamonymorron}
                alt="Imagen de pizza de jamon"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="row-span-3 col-span-2">
              02
              <img
                src={empanada_atun}
                alt="Imagen de pizza de jamon"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="row-span-3 items-center border-b-logo-orange border-8">
              03
              <img src={gaseosa} alt="" className="max-w-full rounded-lg" />
            </div>
            <div className="row-span-5 border-b-logo-orange border-8">
              04
              {/* <img
                src={gaseosa}
                alt=""
                className="max-w-full text-center rounded-lg"
              /> */}
              {/* <img
                src={almendrado}
                alt="Imagen de pizza de jamon"
                className="max-w-full rounded-lg"
              /> */}
            </div>
          </div>
          {/* <div>
          <span className="max-sm:mt-20 lg: mt-20 flex justify-center">
            <img
              src={announce}
              className=" rounded-lg max-sm:w-11/12 items-center "
            />
          </span>
        
          <div className=" max-sm: flex items-center lg:grid grid-cols-4 gap-1 mt-1">
            <div className="col-span-3">
              <img
                src={jamonymorron}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="row-span-1">
              <img src={gaseosa} alt="" className="w-full rounded-lg" />
            </div>
            <div className="w-[100%] col-span-3">
              <img
                src={empanada_atun}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[100%] col-span-1 row-span-3">
              <img src={almendrado} alt="" className="w-full  rounded-lg" />
            </div>
          </div>
        </div> */}
          <div className="max-sm:hidden lg:grid grid-cols-1">
            <img src={fondo} alt="" className="w-full" />
          </div>
        </section>
        {/* <ImageGallery /> */}
      </div>
    </div>
  );
};
