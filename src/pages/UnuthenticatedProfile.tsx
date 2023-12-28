import img from '../assets/profile/doorProfile.png';

const Profile = () => {
  return (
    <div className="min-w-96 wrapper pt-5 pb-12  bg-bg-profile ">
      <div className="w-96 grid overflow-hidden m-auto">
        <h1 className="ml-6 font-semibold text-2xl">Mi Perfil</h1>
        <p className="text-center text-xl font-medium mt-4">
          Debes tener una sesión iniciada para acceder a tu perfil.
        </p>
        <div className="w-96 justify-self-center">
          <img src={img} alt="doorimg" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="flex w-full text-white justify-center rounded-full bg-logo-orange px-3 py-1.5  font-semibold shadow-sm hover:bg-red-error"
          >
            Iniciar sesión
          </button>
          <a
            href=""
            className="text-center mt-4 font-semibold text-logo-orange hover:text-red-error"
          >
            Registrarme
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
