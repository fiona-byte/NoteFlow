const Strikethrough = ({ className }: { className?: string }) => {
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
        d="M3 9H15"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 5.75C13.125 3.817 11.2782 2.25 9 2.25C6.72182 2.25 4.875 3.817 4.875 5.75C4.875 6.11459 4.91502 6.44837 5.0001 6.75M4.5 12.25C4.5 14.183 6.51472 15.75 9 15.75C11.4853 15.75 13.5 14.75 13.5 12.25C13.5 10.4553 12.727 9.43365 11.1809 9"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Strikethrough;
