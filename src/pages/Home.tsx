import announce from '../assets/Navbar icons/promos img.jpg';
import ProductCard from '../components/Cards/ProductCard';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';
import { Navbar } from '../components/Navbar/Navbar';
import useProducts from '../hooks/useProduct';
import useProfile from '../hooks/useProfile';
import { useState } from 'react';
import CreateProfile from '../components/Profile/CreateProfileForm';
export const Home = () => {
  const { productsData } = useProducts();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { profileData } = useProfile({
    onReject: () => {
      setOpenModal(true);
    },
  });

  return (
    <>
      {!profileData && (
        <CreateProfile openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <Navbar />
      <div className="flex justify-center items-center pt-20 bg-background-home">
        <div className="container mx-auto grid max-md: grid-cols-1 lg:grid-cols-2">
          <section className="grid gap-4 p-4 items-center place-content-around max-sm:grid-cols-1">
            <div className="grid grid-rows-6 max-md:grid-cols-8 lg:grid-cols-5 gap-3">
              <div className="col-span-5 pb-4 max-md:col-span-8 row-span-1">
                <img
                  src={announce}
                  alt=""
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div className="col-span-3 row-span-3 max-md:col-span-5">
                <img
                  src={jamonymorron}
                  alt="jamon y morron"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="col-span-2 row-span-2 max-md:col-span-3">
                <img
                  src={gaseosa}
                  alt="coca cola"
                  className="object-cover w-full h-full rounded-lg items-center"
                />
              </div>
              <div className="col-span-2 row-span-3 max-md:col-span-3">
                <img
                  src={almendrado}
                  alt="postre almendrado"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="col-span-3 row-span-2 max-md:col-span-5">
                <img
                  src={empanada_atun}
                  alt="empanada atun"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-center">
              <h2 className="font-bold">Recomendaciones</h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-4 grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-3">
              <ProductCard products={productsData || []} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
