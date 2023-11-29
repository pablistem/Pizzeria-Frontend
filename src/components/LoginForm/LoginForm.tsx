import { Link, useNavigate } from 'react-router-dom';
import LoginInputs from './LoginInputs';
import { INPUTS_LOGIN } from '../const/inputs.auth';
import { useState } from 'react';
import { login } from '../../services/user.api';
import { errorAlert, successAlert, toastAlertSuccess } from '../../services/alert';

export const LoginForm = () => {

  const [data, setData] = useState({email: '', password: ''})
  const navigate = useNavigate()
  
  
  const onSubmitLogin = async(e:React.FormEvent)=>{
    e.preventDefault()

    try {
      const response = await login(data)
      console.log(response)
      toastAlertSuccess("Logeado satisfactoriamente")
      navigate("/")
    } catch (error) {
      errorAlert("Error", "Campos Incorrectos")
    }
  }
    const onChangeInput = (e:React.FormEvent)=>{
      const { value, name } = e.target;

      setData({...data, [name]: value})
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitLogin}>
        <div className="text-3xl max-sm:hidden max-lg:hidden lg:text-3xl">
          <p className=" justify-center">Hace tu pedido</p>
          <p className="justify-center">en pocos minutos</p>
        </div>

        <div className="">
          {/* <input
            id="email"
            name="email"
            type="Text"
            placeholder="Email direction"
            required
            onChange={onChangeInput}
            className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          /> */}
          <LoginInputs {...INPUTS_LOGIN.email} onChange={onChangeInput} />
        </div>

        <div className="">
          {/* <input
            id="password"
            name="password"
            type="Text"
            placeholder="Password"
            required
            onChange={onChangeInput}
            className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
          /> */}
          <LoginInputs {...INPUTS_LOGIN.password} onChange={onChangeInput} />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="flex w-32 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Iniciar sesión
          </button>
        </div>

        <div className=" font-semibold text-sm text-slate-500 text-center md:text-left flex justify-center text-logo-orange mt-9">
          No tienes una cuenta?{' '}
          <Link
            className="text-logo-orange hover:underline hover:underline-offset-4"
            to="/register"
          >
            Registrate
          </Link>
        </div>
      </form>
    </div>
  );
};
