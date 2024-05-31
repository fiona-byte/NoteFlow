const Link = ({ className }: { className?: string }) => {
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
        d="M9.79489 8.20502C11.4824 9.89252 11.4824 12.6225 9.79489 14.3025C8.10739 15.9825 5.37738 15.99 3.69738 14.3025C2.01738 12.615 2.00988 9.88502 3.69738 8.20502"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.94247 10.0575C6.18747 8.30247 6.18747 5.45247 7.94247 3.68997C9.69747 1.92747 12.5475 1.93497 14.31 3.68997C16.0725 5.44497 16.065 8.29497 14.31 10.0575"
        stroke="#3A3235"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Link;
