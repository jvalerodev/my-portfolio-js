const StarsBackground = ({ children }) => {
  return (
    <>
      <div className="absolute -z-10">
        <div className="stars-1"></div>
        <div className="stars-2"></div>
        <div className="stars-3"></div>
      </div>
      {children}
    </>
  );
};

export default StarsBackground;