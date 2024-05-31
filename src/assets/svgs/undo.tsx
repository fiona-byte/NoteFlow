const Undo = ({ className }: { className?: string }) => {
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
        d="M5.94189 15.2583H12.6086C14.9086 15.2583 16.7752 13.3917 16.7752 11.0917C16.7752 8.79165 14.9086 6.92499 12.6086 6.92499H3.44189"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.35843 9.00831L3.2251 6.87497L5.35843 4.74164"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Undo;
