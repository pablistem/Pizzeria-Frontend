import SubmitButton from '../Buttons/SubmitButton';

const RegisterForm = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              required
              autoComplete="given-name"
              className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              id="lastName"
              name="lastName"
              type="Text"
              placeholder="Apellido"
              required
              autoComplete="family-name"
              className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              autoComplete="email"
              className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              required
              className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              id="password2"
              name="password2"
              type="password"
              placeholder="Repetir Contraseña"
              required
              className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <SubmitButton buttonText={'Registrarme'} />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
