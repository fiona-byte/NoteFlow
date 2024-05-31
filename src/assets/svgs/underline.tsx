const Underline = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 15.75H14.25"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 2.25V7.5C3.75 10.4025 6.0975 12.75 9 12.75C11.9025 12.75 14.25 10.4025 14.25 7.5V2.25"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Underline;
