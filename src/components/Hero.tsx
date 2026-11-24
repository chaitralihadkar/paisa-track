const Hero = () => {
  return (
    //sm:text-amber-300 md:text-blue-500 lg:text-pink-500 xl:text-purple-500 2xl:text-cyan-500 to understand breakpoints
    <section className="flex flex-col gap-5 md:flex-row md:gap-3 px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8">{/* section containing {intro} div and {features} div */}

      {/* left section/div for intro*/}
      <div className="flex flex-col items-center gap-3">
        {/*whole div containing {h1, h2}, {ps}, {span} divs */}

        <div className="flex flex-col gap-2 items-center">
          {/* div containing h1 and h2 tags */}
          <h1 className="text-blue-950 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Welcome to PaisaTrack
          </h1>

          <h2 className="text-blue-900 font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Know Your Money. Control Your Future.
          </h2>
        </div>

        <div className="flex flex-col text-sm  sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {/* div containing paragraphs */}
          <p>
            <span className="text-blue-950">PaisaTrack</span> is a personal
            expense tracking website designed to make money management simple,
            organized, and efficient.
          </p>
          <p>
            It allows users to record their income and expenses, categorize
            transactions, monitor their spending patterns, and understand their
            overall financial position through an intuitive dashboard.
          </p>

          <p>
            The website offers an interactive dashboard where users can view
            their total income, expenses, available balance, and savings at a
            glance.
          </p>

        </div>

          <div> {/* div containing span  */}
            <span className="text-blue-900 font-semibold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Track. Plan. Save.
            </span>
          </div>
      </div>

      {/* right section/div for features*/}
      <div className="flex flex-col items-center justify-center md:w-screen">
        {/* div containing {Features(heading)} div and other features divs */}

        <div className="border-2 border-blue-900 rounded-2xl bg-blue-50 px-5 py-3 flex flex-col gap-2 items-center">
          {/* div containing {Features(heading)} div and other features divs + for small box (w-fit)*/}
          
        <div className="text-blue-950 text-xl font-semibold md:col-span-2 md:text-2xl md:font-bold xl:text-3xl">Features</div>
        <ul className="text-sm list-disc list-inside sm:list-none sm:grid sm:grid-cols-2 sm:gap-2 sm:grid-flow-row md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
          {/* div containing all 6 features */}
          <div className="sm:row-span-5 sm:flex sm:items-center">
            <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-xl sm:bg-blue-100">
            {/* div containing first feature */}
            Financial overview of
            <ul className="list-decimal list-inside pl-4 ">
              <li>Total income</li>
              <li>Total expense</li>
              <li>Available balance</li>
              <li>Number of transactions</li>
            </ul>
          </li>
          </div>
          

          {/* other divs containing other 5 features are below */}
          <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-2xl sm:bg-blue-100">Add income and expenses</li>
          <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-2xl sm:bg-blue-100">Edit and delete transactions</li>
          <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-2xl sm:bg-blue-100">Search and filter transactions</li>
          <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-2xl sm:bg-blue-100">Date wise transaction history</li>
          <li className="sm:border-2 sm:border-blue-900 sm:p-2 sm:rounded-2xl sm:bg-blue-100">Income vs Expense chart</li>
        </ul>
 
        </div>
      </div>
    </section>
  );
};

export default Hero;
