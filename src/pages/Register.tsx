import logo from '../assets/logo.jpg';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2">
      <div>
        <img src={logo} alt="Pizzería Don Remolo Logo" className="rounded-xl" />
      </div>

      <div className="flex w-full min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <RegisterForm />
        <h1 className="text-white">Pizzería Don Remolo</h1>
        <p className="mt-10 text-center text-sm text-logo-orange">
          ¿Ya tienes cuenta?
          <NavLink
            to="/login"
            className="font-semibold leading-6 text-logo-orange hover:text-orange-500"
          >
            Inicia sesión
          </NavLink>
        </p>
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex w-48 m-3 justify-center rounded-full bg-light-pink px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            &#8594; Continuar sin cuenta*
          </button>
        </div>
        <div className="flex justify-center text-sm mt-10">
          <p>
            *Esta opción solo le permitirá finalizar el pedido mediante whatsapp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
