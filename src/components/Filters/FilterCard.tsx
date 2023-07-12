import cn from "classnames";

interface FilterCardProps {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}

const FilterCard = ({ label, icon, active, onClick }: FilterCardProps) => {
  const imageSrc = `icons/${icon}.jpeg`;
  return (
    <button
      type="button"
      className={cn(
        "flex flex-col items-center gap-2 pt-1 md:pt-8 pb-[14px] border-b-2 border-transparent transition-all duration-300 hover:opacity-100",
        {
          "opacity-100 border-b-2 border-b-black": active,
          "opacity-60 hover:border-b-2 hover:border-primary-border": !active,
        }
      )}
      onClick={onClick}
    >
      <img src={imageSrc} alt={label} className="w-6 h-6 transition-all" />
      <span className="text-xs font-medium whitespace-nowrap transition-all">
        {label}
      </span>
    </button>
  );
};

export default FilterCard;
