import icon from '../assets/icon_pizza_shop.jpg';
import { IUser } from '../types/types';
import { logout } from '../services/user.api';
import { useNavigate } from 'react-router-dom';

type Props = { user: IUser; onShowMenuAgain: () => void };

const Profile = ({ user, onShowMenuAgain }: Props) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-w-50 wrapper pt-5 pb-12 pl-5 pr-5 bg-bubble-gum">
      <button
        className="flex w-20 text-black justify-center rounded-full bg-white px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
        data-cy="button-back"
        onClick={onShowMenuAgain}
      >
        volver
      </button>
      <div className="w-96  grid overflow-hidden  text-left m-auto">
        <h1 className="font-semibold text-2xl">Mi Perfil</h1>
        <a href="" className="justify-self-end">
          <svg
            className="h-6 w-6 "
            data-slot="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path>
          </svg>
        </a>
        <div className="w-32 justify-self-center">
          <img
            src={icon}
            alt="Pizzería Don Remolo Logo"
            className="rounded-full"
          />
          <h2 className="font-semibold text-center my-6 text-xl">Carlitos</h2>
        </div>

        <div className="flex w-full min-h-full flex-col mt-50 items-start">
          <h2 className="text-center my-6 text-2xl">Datos Personales</h2>
          <div className="flex flex-col justify-center w-full bg-bubble-gum rounded-lg">
            <p data-cy="user-name" className="mt-3 mx-3 font-semibold ">
              {user.name}
            </p>
            <p className="mb-3 mx-3">Nombre</p>

            <p data-cy="user-direction" className="mt-3 mx-3 font-semibold ">
              {user.direction}
            </p>
            <p className="mb-3 mx-3">Dirección</p>

            <p data-cy="user-email" className="mt-3 mx-3 font-semibold ">
              {user.email}
            </p>
            <p className="mb-3 mx-3">Mail</p>

            <p data-cy="user-telephone" className="mt-3 mx-3 font-semibold ">
              {user.telephone}
            </p>
            <p className="mb-3 mx-3">Teléfono</p>
            <button
              data-cy="user-logout"
              type="button"
              onClick={handleLogout}
              className="flex w-full text-white justify-center rounded-full bg-logo-orange px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
            >
              Cerrar sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
