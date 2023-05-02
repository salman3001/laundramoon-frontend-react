const CheckSvg = (prop) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_189_99)">
          <path
            d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM14.5234 8.27344L9.52344 13.2734C9.30859 13.4883 9.03125 13.5938 8.75 13.5938C8.46875 13.5938 8.18984 13.4875 7.97617 13.2739L5.47617 10.7739C5.05 10.3466 5.05 9.6532 5.47617 9.22586C5.90352 8.79852 6.59688 8.79852 7.02422 9.22586L8.75 10.9531L12.9766 6.72656C13.4039 6.29922 14.0973 6.29922 14.5246 6.72656C14.9492 7.15234 14.9492 7.84766 14.5234 8.27344Z"
            fill={prop.color}
          />
        </g>
        <defs>
          <clipPath id="clip0_189_99">
            <rect width="20" height="20" fill="red" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CheckSvg;
