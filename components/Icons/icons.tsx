function HamBurgerMenu(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 50 72"
      id="emoji"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="color" />
      <g id="hair" />
      <g id="skin" />
      <g id="skin-shadow" />
      <g id="line">
        <line
          x1="16"
          x2="56"
          y1="26"
          y2="26"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
        <line
          x1="16"
          x2="56"
          y1="36"
          y2="36"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
        <line
          x1="16"
          x2="56"
          y1="46"
          y2="46"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
      </g>
    </svg>
  );
}

function CrossIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={props.stroke ? props.stroke : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={props.stroke ? props.stroke : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeftBackArrow(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      width="31"
      height="9"
      viewBox="0 0 31 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.4297 8.89111V6.89111H3.56695L0.564219 8.89111H14.5438H30.4297ZM11.3666 6.89111V0.891113L3.56695 6.89111H11.3666Z"
        fill="white"
      />
    </svg>
  );
}

export { HamBurgerMenu, CrossIcon, LeftBackArrow };
