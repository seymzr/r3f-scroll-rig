export const Navigation = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened,isInView } = props;

  return (
    <>
      <div

        className="z-50 hidden md:block loading fixed top-[50%] right-12 md:top-[50%]    w-16 h-11"
      >
          <MenuButton label="About" isInView={isInView} index={0} onClick={() => onSectionChange(0)} />
          <MenuButton label="Numbers" isInView={isInView} index={2} onClick={() => onSectionChange(2)} />
          <MenuButton label="Projects" isInView={isInView} index={3} onClick={() => onSectionChange(3)} />
          <MenuButton label="Community" isInView={isInView} index={4} onClick={() => onSectionChange(4)} />
          <MenuButton label="Partners" isInView={isInView} index={5} onClick={() => onSectionChange(5)} />
          <MenuButton label="Startups" isInView={isInView} index={6} onClick={() => onSectionChange(6)} />
      </div>
      
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick,index,isInView } = props;
  return (
    <button
      onClick={onClick}
      className={`${isInView-1==index?"font-bold  text-white text-xl":"font-normal px-5 text-white/30 text-lg"}  font-bold cursor-pointer  hover:text-indigo-600 duration-300 `}
    >
      {label}
    </button>
  );
};
