import exitImage from "../assets/exit.svg";

interface ExitButtonProps {
  className?: string;
  imgWidth?: string;
  onClick: () => void;
}

function ExitButton({ className, imgWidth, onClick }: ExitButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-fit h-fit bg-accent p-3 rounded-full ${className}`}
    >
      <img src={exitImage} alt="Menu" className={`w-6 ${imgWidth}`} />
    </button>
  );
}

export default ExitButton;
