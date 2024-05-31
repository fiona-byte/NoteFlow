const Bold = ({ className }: { className?: string }) => {
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
        d="M3.65991 3.375C3.65991 2.55 4.33491 1.875 5.15991 1.875H8.99991C10.9649 1.875 12.5624 3.4725 12.5624 5.4375C12.5624 7.4025 10.9649 9 8.99991 9H3.65991V3.375Z"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.65991 9H10.7849C12.7499 9 14.3474 10.5975 14.3474 12.5625C14.3474 14.5275 12.7499 16.125 10.7849 16.125H5.15991C4.33491 16.125 3.65991 15.45 3.65991 14.625V9V9Z"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Bold;
