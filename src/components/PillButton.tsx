interface PillButtonProps {
  content: string;
  className?: string;
  onClick?: () => void;
}

function PillButton({ content, className, onClick }: PillButtonProps) {
  return (
    <button
      className={`rounded-full h-fit py-3 px-6 md:text-xl md:py-4 md:px-10 bg-primary text-light font-bold ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default PillButton;
