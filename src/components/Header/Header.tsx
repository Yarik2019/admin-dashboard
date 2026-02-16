import { ModeToggle } from "../Theme/ModeToggle";
import { useStyles } from "../StylesContext/StylesContext";

const Header = () => {
  const { color, bgColor, boxShadowColor, stop, maxNumber, minNumber } =
    useStyles();
  return (
    <header
      className="flex justify-between bg-gray-300 dark:bg-gray-800 dark:text-white border-b dark:border-white p-4"
      style={{
        backgroundColor: bgColor,
        boxShadow: `${stop}px ${minNumber}px ${maxNumber}px ${boxShadowColor}`,
      }}
    >
      <h1 className="text-2xl font-bold" style={{ color: color }}>
        Admin Dashboard
      </h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
