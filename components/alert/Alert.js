const Alert = ({ msg, color }) => {
  return (
    <div className={`w-full ${color}`}>
      <p className="text-center p-2 font-bold">{msg}</p>
    </div>
  );
};

export default Alert;