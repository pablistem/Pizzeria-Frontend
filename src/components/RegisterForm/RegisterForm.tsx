const RegisterForm = () => {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div className='register__Input-Container'>                            
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
                        </div>
                        <div className='register__Input-Container'>                            
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
                        </div>
                        <div className='register__Input-Container'>                            
                            <div className="">
                                <input 
                                    id="email" 
                                    name="Email" 
                                    type="email"                                     
                                    placeholder='Correo electrónico'
                                    required 
                                    className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" 
                                    />
                            </div>
                        </div>
                        <div className='register__Input-Container'>                            
                            <div className="">
                                <input 
                                    id="contraseña" 
                                    name="Contraseña" 
                                    type="Text"                                     
                                    placeholder='Contraseña'
                                    required 
                                    className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" 
                                    />
                            </div>
                        </div>
                        <div className='register__Input-Container'>                            
                            <div className="">
                                <input 
                                    id="contraseña2" 
                                    name="contraseña2" 
                                    type="Text"                                     
                                    placeholder='Repetir Contraseña'
                                    required 
                                    className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" 
                                    />
                            </div>
                        </div>
                        

                        <div className='flex justify-center'>
                            <button 
                                type="submit" 
                                className="flex w-32 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Registrarme
                            </button>
                        </div>
                    </form>
            
            </div>
    )
}

export default RegisterForm