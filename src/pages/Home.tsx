import announce from '../assets/Navbar icons/promos img.jpg';
import ImageGallery from '../components/Image_gallery/Imagegallery';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';

export const Home = () => {
  return (
    <div className="flex justify-center items-center pt-20 bg-background-home">
      <div className="container mx-auto grid max-md: grid-cols-1 lg:grid-cols-2">
        <section className="grid gap-4 p-4 items-center place-content-around max-sm:grid-cols-1">
          <div className="grid grid-rows-6 max-md:grid-cols-8 lg:grid-cols-5 gap-3">
            <div className="col-span-5 pb-4 max-md:col-span-8 row-span-1">
              <img src={announce} alt="" className="rounded-lg w-full h-full" />
            </div>
            <div className="col-span-3 row-span-3 max-md:col-span-5">
              <img
                src={jamonymorron}
                alt="Imagen de pizza de jamon"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-2 row-span-2 max-md:col-span-3">
              <img
                src={gaseosa}
                alt=""
                className="object-cover w-full h-full rounded-lg items-center"
              />
            </div>
            <div className="col-span-2 row-span-3 max-md:col-span-3">
              <img
                src={almendrado}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="col-span-3 row-span-2 max-md:col-span-5">
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
          <div className="flex justify-center">
            <h2 className="font-bold">Recomendaciones</h2>
          </div>

          <ImageGallery />
        </section>
      </div>
    </div>
  );
};
