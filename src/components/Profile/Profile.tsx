import icon from '../../assets/icon_pizza_shop.jpg';
import { CreateAddressForm } from '../Address/CreateAddressForm';
import { IProfile } from '../../types/types';
import useLogout from '../../hooks/useLogout';
import UpdateProfile from './UpdateProfileForm';
import AddressesList from '../Address/Addresses';
type Props = { profile: IProfile; onShowMenuAgain: () => void };

const Profile = ({ profile, onShowMenuAgain }: Props) => {
  const { setLogout } = useLogout({})

  return (
    <div className="min-w-50 wrapper pt-5 pb-12 pl-5 pr-5 bg-bubble-gum">
      <button
        className="flex w-20 text-black justify-center rounded-full bg-white px-3 py-1.5 font-semibold shadow-sm hover:bg-red-error"
        data-cy="button-back"
        onClick={onShowMenuAgain}
      >
        volver
      </button>
      <div className="w-96 grid overflow-hidden  text-left m-auto">
        <h1 className="font-semibold text-2xl">Mi Perfil</h1>
        <UpdateProfile />
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
            <p data-cy="user-username" className="mt-3 mx-3 font-semibold">
              {profile.username}
            </p>
            <p className="mb-3 mx-3">Nombre de Usuario</p>
            
            <p data-cy="user-name" className="mt-3 mx-3 font-semibold">
              {profile.name}
            </p>
            <p className="mb-3 mx-3">Nombre</p>

            <p data-cy="user-last-name" className="mt-3 mx-3 font-semibold">
              {profile.lastName}
            </p>
            <p className="mb-3 mx-3">Apellido</p>

            <p data-cy="user-email" className="mt-3 mx-3 font-semibold">
              {profile.age}
            </p>
            <p className="mb-3 mx-3">Edad</p>

            <p data-cy="user-telephone" className="mt-3 mx-3 font-semibold">
              {profile.phone}
            </p>
            <p className="mb-3 mx-3">Teléfono</p>

            <p className="mb-3 mx-3">Direcciones</p>
            <AddressesList className="mb-3 mx-3" addresses={profile.addresses} />
            <CreateAddressForm profile={profile.id} />
            <button
              type="button"
              onClick={() => setLogout()}
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