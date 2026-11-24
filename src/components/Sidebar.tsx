const Sidebar = () => {
  return (
    <div className="h-screen">
      <div>Dashboard</div>
      <div>Transactions</div>
      <div>Income</div>
      <div>Expense</div>
      <div>Reports</div>
      <div>My Profile</div>

      <div>
        Log out{" "}
        <img
          src="src/assets/right-arrow.png"
          alt="right arrow"
          className="pl-1 inline w-5 h-5"
        />
      </div>
    </div>
  );
};

export default Sidebar;
