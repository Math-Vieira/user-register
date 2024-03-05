type NotFoundProps = {
  size?: number;
};

export const NotFound = ({ size = 246 }: NotFoundProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 246 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M71.75 20.5L20.5 71.75V174.25L71.75 225.5H123L97.375 196.185H84.5625L49.815 161.437V84.5625L84.5625 49.815H97.375L123 20.5H71.75Z"
        fill="#641A65"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.625 20.5L123 49.815H161.437L196.185 84.5625V161.437L161.437 196.185H123L148.625 225.5H174.25L225.5 174.25V71.75L174.25 20.5H148.625Z"
        fill="#641A65"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M123 174.25L97.375 148.625L123 123L97.375 97.375L123 71.75H97.375L71.75 97.375V148.625L97.375 174.25H123Z"
        fill="#C013C3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.625 71.75L123 97.375L148.625 123L123 148.625L148.625 174.25L174.25 148.625V97.375L148.625 71.75Z"
        fill="#C013C3"
      />
    </svg>
  );
};
