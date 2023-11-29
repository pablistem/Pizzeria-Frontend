import { Field } from 'formik';

const RegisterInput = ({ ...props }) => {
  return (
    <Field
      className="block w-full rounded-xl border-1 py-3 text-gray-900 shadow-md ring-1 p-3 ring-inset ring-input-grey placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      {...props}
      required
    />
  );
};

export default RegisterInput;