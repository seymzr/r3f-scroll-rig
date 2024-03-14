export const Navigation = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened,isInView,navOpened } = props;

  return (
    <>
      {!navOpened&&<div

        className="z-10 hidden md:block loading fixed top-[50%] left-12 md:top-[50%]    w-16 h-11"
      >
          <MenuButton label="About" isInView={isInView} index={0} onClick={() => {onSectionChange(0)}} />
          <MenuButton label="Numbers" isInView={isInView} index={3.5} onClick={() => onSectionChange(2.7)} />
          <MenuButton label="Projects" isInView={isInView} index={4.5} onClick={() => onSectionChange(3.7)} />
          <MenuButton label="Community" isInView={isInView} index={5.5} onClick={() => onSectionChange(4.7)} />
          <MenuButton label="Partners" isInView={isInView} index={6.7} onClick={() => onSectionChange(5.7)} />
          <MenuButton label="Startups" isInView={isInView} index={7.5} onClick={() => onSectionChange(7.5)} />
      </div>}
      
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick,index,isInView } = props;
  return (
    <button
      onClick={onClick}
      className={`${isInView-1==index?"font-medium  text-white text-2xl px-3":"font-normal  text-white/30 text-lg"}  font-bold cursor-pointer  hover:text-indigo-600 duration-300 `}
    >
      {label}
    </button>
  );
};