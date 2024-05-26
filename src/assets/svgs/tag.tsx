const Tag = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.77992 10.2L5.79992 13.22C7.03992 14.46 9.05325 14.46 10.2999 13.22L13.2266 10.2934C14.4666 9.05337 14.4666 7.04003 13.2266 5.79337L10.1999 2.78003C9.56659 2.1467 8.69325 1.8067 7.79992 1.85337L4.46658 2.01337C3.13325 2.07337 2.07325 3.13337 2.00658 4.46003L1.84658 7.79337C1.80658 8.69337 2.14659 9.5667 2.77992 10.2Z"
        stroke="#F2E4DC"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33326 8.00004C7.25374 8.00004 7.99993 7.25384 7.99993 6.33337C7.99993 5.41289 7.25374 4.6667 6.33326 4.6667C5.41279 4.6667 4.6666 5.41289 4.6666 6.33337C4.6666 7.25384 5.41279 8.00004 6.33326 8.00004Z"
        stroke="#F2E4DC"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Tag;
