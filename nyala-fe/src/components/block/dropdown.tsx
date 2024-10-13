interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
  placeholder,
}) => {
  return (
    <div className="w-60">
      <select
        required
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 bg-white border text-sm rounded-lg text-neutral">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
