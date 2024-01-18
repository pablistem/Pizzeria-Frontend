import pizza_jamon from '../../assets/Pizza types/pizza-jamon.jpg';
import pizza_cuatro_quesos from '../../assets/Pizza types/pizza-cuatro-quesos.jpg';
import pizza_pepperoni from '../../assets/Pizza types/pizza-cheese-pepperoni.jpg';
import pizza_jamon_salchichas from '../../assets/Pizza types/pizza-jamon-salchichas.jpg';
const ImageGallery = () => {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-3">
      <article className="flex flex-col overflow-hidden rounded bg-white shadow w-[100%]">
        <div className="h-52">
          <img
            className="h-full w-full object-cover object-center"
            src={pizza_jamon}
            alt="pizza de jamon"
          />
        </div>
        <div className="flex-1 space-y-3 p-5">
          <h3 className="text-xl font-semibold text-sky-500">Jamon</h3>
          <h2 className="text-sm font-semibold leading-tight text-slate-800">
            Salsa,muzzarella y jamon
          </h2>
          <p className="text-slate-500">4000</p>
        </div>
      </article>
      <article className="flex flex-col overflow-hidden rounded bg-white shadow">
        <div className="h-52">
          <img
            className="h-full w-full object-cover object-center"
            src={pizza_cuatro_quesos}
            alt="pizza de jamon"
          />
        </div>
        <div className="flex-1 space-y-3 p-5">
          <h3 className="text-xl font-semibold text-sky-500">Cuatro quesos</h3>
          <h2 className="text-sm font-semibold leading-tight text-slate-800">
            Salsa, muzzarella, queso azul, queso parmesano y queso gorgonzola
          </h2>
          <p className="text-slate-500">5000</p>
        </div>
      </article>
      <article className="flex flex-col overflow-hidden rounded bg-white shadow">
        <div className="h-52">
          <img
            className="h-full w-full object-cover object-center"
            src={pizza_jamon_salchichas}
            alt="pizza de jamon"
          />
        </div>
        <div className="flex-1 space-y-3 p-5">
          <h3 className="text-xl font-semibold text-sky-500">
            Jamon y salchichas
          </h3>
          <h2 className="text-sm font-semibold leading-tight text-slate-800">
            Salsa,muzzarella, jamon, salchichas
          </h2>
          <p className="text-slate-500">4000</p>
        </div>
      </article>
      <article className="flex flex-col overflow-hidden rounded bg-white shadow ">
        <div className="h-52">
          <img
            className="h-full w-full object-cover object-center"
            src={pizza_pepperoni}
            alt="pizza de jamon"
          />
        </div>
        <div className="flex-1 space-y-3 p-5">
          <h3 className="text-xl font-semibold text-sky-500">Pepperoni</h3>
          <h2 className="text-sm font-semibold leading-tight text-slate-800">
            Salsa,muzzarella y pepperoni
          </h2>
          <p className="text-slate-500">4850</p>
        </div>
      </article>
    </div>
  );
};

export default ImageGallery;
