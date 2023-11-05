
import './LoginForm.css'
export const LoginForm = () => {
    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className="space-y-6" action='#' method='POST'>
                <div className='text-3xl max-sm:hidden max-lg:hidden lg:text-3xl'>
                    <p className=' justify-center'>Hace tu pedido</p>
                    <p className='justify-center'>en pocos minutos</p>
                </div>

                <div className="">
                    <input
                        id="nombre"
                        name="Nombre"
                        type="Text"
                        placeholder='Nombre'
                        required
                        className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                </div>


                <div className="">
                    <input
                        id="apellido"
                        name="Apellido"
                        type="Text"
                        placeholder='Apellido'
                        required
                        className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                    />
                </div>


                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="flex w-32 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Iniciar sesión
                    </button>
                </div>

                <div className=" font-semibold text-sm text-slate-500 text-center md:text-left flex justify-center text-logo-orange mt-9">
                    No tienes una cuenta? <a className="text-logo-orange hover:underline hover:underline-offset-4" href="#">Registrate</a>
                </div>
 
            </form>

        </div>


    )
}
