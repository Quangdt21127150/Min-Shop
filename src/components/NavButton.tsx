import menuImage from "../assets/menu.png";

interface NavButtonProps {
  className?: string;
  onClick: () => void;
}

function NavButton({ className, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-accent p-3 rounded-full ${className}`}
    >
      <img src={menuImage} alt="Menu" className="w-5" />
    </button>
  );
}

export default NavButton;
