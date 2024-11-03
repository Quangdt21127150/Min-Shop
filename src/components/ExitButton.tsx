import exitImage from "../assets/exit.svg";

interface ExitButtonProps {
  className?: string;
  onClick: () => void;
}

function ExitButton({ className, onClick }: ExitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-fit h-fit bg-accent p-3 rounded-full ${className}`}
    >
      <img src={exitImage} alt="Menu" className="w-4" />
    </button>
  );
}

export default ExitButton;
