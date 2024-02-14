import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/profile/doorProfile.png';
type Props = { onShowMenuAgain: () => void };

const UnauthenticatedProfile = ({ onShowMenuAgain }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center wrapper bg-bubble-gum p-6">
      <div className="grid overflow-hidden m-auto">
        <button
          className="flex w-20 text-black justify-center rounded-full bg-white px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
          onClick={onShowMenuAgain}
          data-cy="button-back"
        >
          volver
        </button>
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
            className="flex w-full text-white justify-center rounded-full bg-logo-orange px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
            onClick={() => navigate('/login')}
          >
            Iniciar sesión
          </button>
          <Link
            to={'/register'}
            className="text-center mt-4 font-semibold text-logo-orange hover:text-red-error"
          >
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthenticatedProfile;
