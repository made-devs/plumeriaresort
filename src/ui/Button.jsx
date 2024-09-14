/* eslint-disable react/prop-types */
const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`mb-4 flex w-full transform cursor-pointer flex-row items-center justify-center rounded-sm bg-[#ffb2ae] px-4 py-2 font-poppins text-sm font-bold capitalize leading-6 text-[#4b3832] shadow duration-100 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 sm:mb-0 sm:w-auto md:pl-6 md:pr-6 xl:pl-10 xl:pr-10 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
