import { useNavigate } from "react-router-dom";

const UpdateTransaction = ({isUpdateTransactionOpen,setIsUpdateTransactionOpen}) => {
  const navigate = useNavigate();
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      {/* main div containing everything : inner divs */}
      <div className="relative flex flex-col items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl gap-2 md:gap-3  border-2 border-blue-900 rounded-2xl bg-blue-50 m-2 py-5">
        <h1 className="font-bold text-blue-950 text-xl md:text-3xl px-3">
          Update transaction
        </h1>

        <div className="px-3">
          <div className="flex gap-2 items-center justify-between m-1">
            <label className="font-bold text-blue-950">Type/Category:</label>

            <div className="flex justify-between w-[216px] md:w-[312px]">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="category"
                  id="income"
                  value="income"
                />
                <label htmlFor="income">Income</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="radio"
                  name="category"
                  id="expense"
                  value="expense"
                />
                <label htmlFor="expense">Expense</label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between m-1">
            <label htmlFor="title" className="font-bold text-blue-950">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Transaction title/source"
              className="text-center border-2 bg-blue-50 rounded-sm md:text-xl"
            />
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 m-1.5">
            <label htmlFor="description" className="font-bold text-blue-950">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              className="text-center border-2 bg-blue-50 rounded-sm md:text-xl"
            />
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 m-1.5">
            <label htmlFor="amount" className="font-bold text-blue-950">
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="amount"
              className="text-center border-2 bg-blue-50 rounded-sm md:text-xl"
            />
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 m-1.5">
            <label htmlFor="date" className="font-bold text-blue-950">
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-[216px] sm:w-[252.8px] md:w-[312px] border-2 bg-blue-50 rounded-sm md:text-xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center font-bold text-blue-950">
          <button className="rounded-xl px-2 bg-blue-900 text-white text-base my-2 md:text-xl border-2 border-black">
            Update Transaction
          </button>

          <button
            onClick={() => {
              setIsUpdateTransactionOpen(!isUpdateTransactionOpen)
            }}
            className="w-fit rounded-xl px-2 bg-red-100 border-2 border-red-600 text-red-600 text-base my-2 md:text-xl"
          >
            Cancel
          </button>
        </div>

        <button
          onClick={() => {
            setIsUpdateTransactionOpen(!isUpdateTransactionOpen);
          }}
        >
          <img
            src="src/assets/close.png"
            alt="Add"
            className="absolute right-2 top-2 w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default UpdateTransaction;
