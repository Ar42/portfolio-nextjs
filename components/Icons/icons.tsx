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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          strokeWidth="5"
        />
        <line
          x1="16"
          x2="56"
          y1="36"
          y2="36"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          strokeWidth="5"
        />
        <line
          x1="16"
          x2="56"
          y1="46"
          y2="46"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
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
        stroke="#fff"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#fff"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { HamBurgerMenu, CrossIcon };
