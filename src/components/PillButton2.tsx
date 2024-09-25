interface PillButtonProps {
  content: string;
  className?: string;
  onClick?: () => void;
}

function PillButton2({ content, className, onClick }: PillButtonProps) {
  return (
    <button
      className={`text-xl font-bold border-2 border-accent rounded-full px-6 py-3 text-center md:py-4 ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default PillButton2;
