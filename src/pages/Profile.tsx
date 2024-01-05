import { useState, useEffect } from 'react';
import { getUserData } from '../services/user.api';
import { IUser } from '../types/types';

import icon from '../assets/icon_pizza_shop.jpg';

const Profile = () => {
  const [userData, setUserData] = useState<IUser>({
    name: '',
    direction: '',
    email: '',
    telephone: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserData();
        setUserData(result as IUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-w-96 wrapper pt-5 pb-12  bg-bg-profile ">
      <div className="w-96 grid overflow-hidden  text-left m-auto">
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
            <p className="mt-3 mx-3 font-semibold ">{userData.name}</p>
            <p className="mb-3 mx-3">Nombre</p>

            <p className="mt-3 mx-3 font-semibold ">{userData.direction}</p>
            <p className="mb-3 mx-3">Dirección</p>

            <p className="mt-3 mx-3 font-semibold ">{userData.email}</p>
            <p className="mb-3 mx-3">Mail</p>

            <p className="mt-3 mx-3 font-semibold ">{userData.telephone}</p>
            <p className="mb-3 mx-3">Teléfono</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
