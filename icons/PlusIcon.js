const PlusIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0V8H0V10H8V18H10V10H18V8H10V0H8Z" fill={fill} />
    </svg>
  );
};

export default PlusIcon;
