import pizza_jamon from '../../assets/Pizza types/pizza-jamon.jpg';
import pizza_cuatro_quesos from '../../assets/Pizza types/pizza-cuatro-quesos.jpg';
import pizza_pepperoni from '../../assets/Pizza types/pizza-cheese-pepperoni.jpg';
import pizza_jamon_salchichas from '../../assets/Pizza types/pizza-jamon-salchichas.jpg';
const ImageGallery = () => {
  return (
    <div className="grid gap-5 m-auto max-sm:grid-cols-2 md:space-x-4 grid-cols-4 lg:grid-cols-3">
      <div className="max-w-sm z-10 bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-sm:w-[10rem] relative left-4">
        <div className="flex justify-center sm:w-20 md:w-[100%]">
          <img
            className="rounded-t-lg sm:w-36 md:w-full"
            src={pizza_jamon}
            alt="pizza de jamon"
          />
        </div>

        <div className="p-5">
          <h5 className="text-sm  md:text-2xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            Jamon
          </h5>
          <p className="text-xs md:mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa,muzzarella y jamon
          </p>
          <p className="text-sm md:text-xl">4000</p>
        </div>
      </div>

      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[11rem] max-sm:w-[10rem]">
        <div className=" flex justify-center sm:w-20 md:w-fit items-center">
          <img
            className="rounded-t-lg sm:w-36 md:w-full"
            src={pizza_cuatro_quesos}
            alt="pizza de cuatro quesos"
          />
        </div>

        <div className="p-5">
          <div className="flex">
            <h5 className="text-sm md:text-2xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              Cuatro quesos
            </h5>
          </div>
          <p className="text-xs md:mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa,muzzarella,queso azul,queso parmesano y queso gorgonzola
          </p>
          <p className="text-sm md:text-xl">4000</p>
        </div>
      </div>
      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-44 max-sm:w-[10rem] relative left-4">
        <div className="flex justify-center sm:w-20 md:w-[100%]">
          <img
            className="rounded-t-lg w-fit"
            src={pizza_jamon_salchichas}
            alt="pizza de jamon y salchichas"
          />
        </div>

        <div className="p-5 sm:w-20">
          <div className="flex">
            <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl mb-2">
              Jamon y champiñon
            </h5>
          </div>
          <div className=" md:w-[9rem]">
            <p className="text-xs w-full md:mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              Salsa,muzzarella, ajo, jamon y champiñon
            </p>
          </div>
          <p className="text-sm md:text-xl">4850</p>
        </div>
      </div>
      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-sm:w-[10rem] lg:w-[100%]">
        <div className="flex justify-center sm:w-20 md:w-fit">
          <img className="rounded-t-lg" src={pizza_pepperoni} alt="" />
        </div>

        <div className="p-5 sm:w-20">
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white  md:text-2xl mb-2">
            Pepperoni
          </h5>
          <p className="text-xs md:mb-3 text-left font-normal text-gray-700 dark:text-gray-400 ">
            Salsa,muzzarella y pepperoni
          </p>
          <p className="text-sm md:text-xl">4850</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
