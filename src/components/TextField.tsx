interface TextFieldProps {
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function TextField({
  title,
  placeholder,
  type,
  value,
  onChange,
  className,
}: TextFieldProps) {
  return (
    <section className={className}>
      <p className="mb-4">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-xl font-semibold placeholder:font-normal rounded-full border-2 border-accent focus:border-primary py-4 px-6 w-full"
      />
    </section>
  );
}

export default TextField;
