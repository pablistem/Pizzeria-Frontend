import pizza_Jamon_champlnion from '../../assets/Pizza types/pizza-jamon-champiñon.jpg';
import pizza_pepperoni from '../../assets/Pizza types/pizza-pepperoni.jpg';
import pizza_tomate_champinion from '../../assets/Pizza types/pizza-tomate-champiñon.jpg';
import pizza_tomate from '../../assets/Pizza types/pizza-tomate.jpg';
const ImageGallery = () => {
  return (
    <div className="grid grid-cols-3 gap-3 space-x-4 mr-8">
      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
          <img className="rounded-t-lg" src={pizza_Jamon_champlnion} alt="" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Jamon y champiñon
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa, muzzarella, ajo, jamon y champiñon
          </p>
          <p>4850</p>
        </div>
      </div>
      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-44">
          <img className="rounded-t-lg w-full" src={pizza_pepperoni} alt="" />
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pepperoni
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa, muzzarella y pepperoni
          </p>
          <p>4000</p>
        </div>
      </div>
      <div className="max-w-sm bg-bg-card border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-44">
          <img className="rounded-t-lg w-full" src={pizza_tomate} alt="" />
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tomate
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa, muzzarella, ajo y tomate
          </p>
          <p>3500</p>
        </div>
      </div>
      <div className="max-w-sm bg-bg-card rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div>
          <img
            className="w-[100%] rounded-t-lg"
            src={pizza_tomate_champinion}
            alt=""
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tomate y champiñon
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Salsa, tomates, ajo y champiñon
          </p>
          <p>5000</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
