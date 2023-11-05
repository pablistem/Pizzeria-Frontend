
import { LoginForm } from "../components/LoginForm";
import './Login.css'
import icon from '../assets/icon_pizza_shop.jpg'

export const Login = () => {
    return (

        <div className='w-full overflow-hidden wrapper grid gap-8 justify-items-center items-center align-middle pt-14 pb-12 lg:grid-cols-2 m-0 max-sm:flex flex-col justify-center '>
            <div className="w-56 md:w-72">
                <img src={icon} alt="Pizzería Don Remolo Logo" className='rounded-xl' />
            </div>

            <div className="flex w-full min-h-full flex-col mb-50 justify-center px-6 py-12 lg:px-8 ">

                <LoginForm></LoginForm>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="flex w-48 m-3 justify-center rounded-full bg-light-pink px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        &#8594; Continuar sin cuenta*
                    </button>
                </div>
                <div className='flex justify-center text-sm mt-10 text-left'>
                    <p className= " text-input-grey text-xs lg:w-80">*Esta opción solo le permitirá finalizar el pedido mediante whatsapp</p>
                </div>
          

            </div>

        </div>
    )
}
