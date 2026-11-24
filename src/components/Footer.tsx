export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 items-center px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8 lg:flex-row">
      {/* left div for logo, title and some description */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 lg:w-full">
        <img
          src="src/assets/paisaTrack-logo.png"
          alt="Paisa Track Logo"
          className="w-25 sm:w-30 md:w-35 lg:w-40 xl:w-45 2xl:w-52 h-25 sm:h-30 md:h-35 lg:h-40 xl:h-45 2xl:h-52 rounded-full"
          // w-35 h-30 rounded-full
        />

        <div className="">
          {/* flex flex-col gap-2 */}
          <h1 className="font-bold text-blue-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            PaisaTrack
          </h1>
          {/* text-2xl sm:text-4xl md:text-6xl lg:8xl xl:10xl 2xl:12xl font-bold text-blue-950 */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            {/* mt-3 text-sm text-blue-950 */}A smarter way to manage your
            money. From tracking everyday transactions to analyzing spending
            patterns, PaisaTrack makes personal finance simple, clear, and
            manageable.
          </p>
        </div>
      </div>

      {/* right div for GO TO section */}
      <div className="flex flex-col gap-3 lg:w-screen">
        {/* flex flex-col px-4 */}
        <div className="flex gap-2 items-center lg:items-start">
          {/* flex text-blue-950 font-bold md:text-2xl xl:3xl gap-2 px-2 */}
          <span className="text-blue-900 font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-left lg:pl-25">Go to</span>
          <img
            src="src/assets/right-arrow.png"
            alt="right arrow"
            className="pl-1 inline w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
          />
        </div>
        {/* w-6 pl-1.5 inline */}
        <ul className="grid gap-2 grid-cols-1 sm:grid-cols-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl underline text-blue-700 lg:block lg:text-left lg:pl-25 sm:text-center">
          {/* text-sm text-blue-950 */}
          <li className="">
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Transactions</a>
          </li>
          <li>
            <a href="#">Income</a>
          </li>
          <li>
            <a href="#">Expense</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">My Profile</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}
