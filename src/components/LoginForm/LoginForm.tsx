import SubmitButton from '../Buttons/SubmitButton';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div className="text-3xl max-sm:hidden max-lg:hidden lg:text-3xl">
          <p className=" justify-center">Hace tu pedido</p>
          <p className="justify-center">en pocos minutos</p>
        </div>

        <div className="">
          <input
            id="email"
            name="email"
            type="Text"
            placeholder="Email direction"
            required
            className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="">
          <input
            id="password"
            name="password"
            type="Text"
            placeholder="Password"
            required
            className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex justify-center">
          <SubmitButton buttonText={'Iniciar sesion'} />
        </div>
        <div className=" font-semibold text-sm text-slate-500 text-center md:text-left flex justify-center text-logo-orange mt-9">
          No tienes una cuenta?{' '}
          <Link
            className="text-logo-orange hover:underline hover:underline-offset-4"
            to="/"
          >
            Registrate
          </Link>
        </div>
      </form>
    </div>
  );
};
