import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  return (
    <header className="flex justify-between px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8"> 
    
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        <img
          src="src/assets/paisaTrack-logo.png"
          alt="Paisa Track Logo"
          className="w-25 sm:w-30 md:w-35 lg:w-40 xl:w-45 2xl:w-52 rounded-full"
        />

        <h1 className="font-bold text-blue-950 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">PaisaTrack</h1>
      </div>

      <div className="flex h-fit gap-2">
        <button onClick={()=> navigate("/sign-up")} className="hidden sm:block rounded-2xl cursor-pointer border-2 border-black px-2 mt-2 xl:text-2xl">Sign up</button>

        <button onClick={()=>navigate("/login")} className="rounded-2xl cursor-pointer bg-blue-800 border-2 border-black text-white px-2 mt-2 xl:text-2xl">Login</button>

        <img className="w-8 mr-2 mt-2 sm:hidden" src="src/assets/menu.png" alt="menu" />{/* open and close menu for mobiles */}
      </div>
    </header>
  );
};

export default Header;
