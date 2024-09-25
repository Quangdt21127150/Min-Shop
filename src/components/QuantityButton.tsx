import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface QuantityButtonProps {
  quantity: number;
  onChangeQuantity: (newQuantity: number) => void;
}

function QuantityButton({ quantity, onChangeQuantity }: QuantityButtonProps) {
  const getInputWidth = () => {
    return `${String(quantity).length - 0.05}ch`;
  };

  return (
    <div className="flex gap-8 w-fit border-2 border-accent rounded-full px-4 py-3 md:px-6 md:gap-[2.625rem]">
      <button onClick={() => onChangeQuantity(quantity > 1 ? quantity - 1 : 1)}>
        <FontAwesomeIcon icon={faAngleLeft} className="w-4" />
      </button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => {
          const newQuantity = Math.max(
            1,
            Math.min(1000, Number(e.target.value))
          );
          onChangeQuantity(newQuantity);
        }}
        style={{ width: getInputWidth() }}
        className="font-bold text-xl md:text-2xl"
      />
      <button
        onClick={() => onChangeQuantity(quantity < 1000 ? quantity + 1 : 1000)}
      >
        <FontAwesomeIcon icon={faAngleRight} className="w-4" />
      </button>
    </div>
  );
}

export default QuantityButton;
