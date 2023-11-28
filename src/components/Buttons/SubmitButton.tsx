// eslint-disable-next-line react/prop-types
const SubmitButton = ({ buttonText }) => {
  return (
    <button
      data-cy="submitButton"
      type="submit"
      className="flex w-32 justify-center rounded-full bg-logo-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
