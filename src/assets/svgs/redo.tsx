const Redo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0584 15.2583H7.39176C5.09176 15.2583 3.2251 13.3917 3.2251 11.0917C3.2251 8.79165 5.09176 6.92499 7.39176 6.92499H16.5584"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6416 9.00831L16.7749 6.87497L14.6416 4.74164"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Redo;
