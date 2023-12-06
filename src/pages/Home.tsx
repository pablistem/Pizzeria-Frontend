import { Navbar } from '../components/Navbar/Navbar';
import announce from '../assets/Home images/promos img.jpg';
import almendrado from '../assets/Food/almendrado.jpg';
import empanada_atun from '../assets/Food/empanada_atun.jpg';
import gaseosa from '../assets/Food/gaseosa.jpg';
import jamonymorron from '../assets/Food/jamonymorron.jpg';
export const Home = () => {
  return (
    <div className="mb-[calc(1.25rem * var(--tw-space-y-reverse))]">
      <Navbar />

      <span className="flex justify-center mt-28">
        <img
          src={announce}
          className=" rounded-lg max-sm:w-11/12 items-center "
        />
      </span>
      <section className="grid text-center grid-cols-2 gap-2 p-4 place-content-around">
        <div className="w-[100%] h-[15rem] border-b-logo-orange border-2">
          <img src={jamonymorron} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="w-[100%]  border-b-logo-orange border-2">
          <img src={gaseosa} alt="" className="w-full h-full" />
        </div>
        <div className=" border-b-logo-orange border-2">
          <img src={empanada_atun} alt="" />
        </div>
        <div>
          <img src={almendrado} alt="" />
        </div>
      </section>
    </div>
  );
};
