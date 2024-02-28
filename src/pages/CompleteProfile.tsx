import img from '../assets/profile/doorProfile.png';
type Props = { onShowMenuAgain: () => void };

const CompleteProfile = ({ onShowMenuAgain }: Props) => {
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
          Tu perfil no tiene ningún dato. ¿Desea completarlo?.
        </p>
        <div className="w-96 justify-self-center">
          <img src={img} alt="doorimg" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
