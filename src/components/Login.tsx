import icon from '../assets/icon_pizza_shop.jpg'
import './Login.css'
export const Login = () => {
    return (

        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="w-52 md:w-56 lg:w-64 max-w-sm space-x-5">
                <img
                    src={icon}
                    alt="Sample image" className='w-full rounded-2xl' />
            </div>


            <div className="md:w-9/12 max-w-sm">
                <div className='text-3xl max-sm:hidden max-md:hidden lg:text-3xl'>
                    <p className=' justify-center'>Hace tu pedido</p>
                    <p className='justify-center'>en pocos minutos</p>
                </div>

                <input className="text-sm w-9/12 px-4 py-2 border text-input-grey rounded-xl mt-4 placeholder-gray-600" type="text" placeholder="Correo electrónico" />

                <input className="text-sm w-9/12 px-4 py-2 border text-input-grey rounded-xl mt-4 placeholder-gray-600" type="password" placeholder="Contraseña" />
                <div className="text-center md:text-left flex justify-center ">
                    <button className="mt-4 bg-logo-orange hover:bg-blue-700 px-8 py-2 text-white rounded-full font-sans  font-semibold text-xs  tracking-wider w-sm" type="submit">Iniciar sesión</button>
                </div>
                <div className=" font-semibold text-sm text-slate-500 text-center md:text-left flex justify-center text-logo-orange mt-9">
                    No tienes una cuenta? <a className="text-logo-orange hover:underline hover:underline-offset-4" href="#">Registrate</a>
                </div>
                <div className="text-center md:text-left flex justify-center ">
                    <button className="mt-4 bg-light-pink hover:bg-blue-700 px-8 py-2 text-text-paragraph font-semibold font-sans rounded-full text-xs tracking-wider " type="submit"> → Continuar sin cuenta*</button>
                </div>
                <div className=' linea text-input-grey'>
                    <p className='text-xs'>Esta opción solo le permitira finalizar el pedido mediante</p>
                    <p className='text-xs text-left'>Whatsapp*</p>
                </div>
            </div>
        </section >

    )
}
