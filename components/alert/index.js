const Alert = ({ msg, color }) => {
  return (
    <div className={`w-full mb-5 ${color}`}>
      <p className="text-center p-2 font-bold">{msg}</p>
    </div>
  );
};

export default Alert;