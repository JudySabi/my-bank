const Account = ({ name, balance, color, operations }) => {
  return (
    <div className="account">
      <div style={{ backgroundColor: `${color}` }} className="title">
        <h1>{name}</h1>
        <h2>{balance} €</h2>
      </div>

      {operations.map((elem, index) => {
        return (
          <div key={index} className="operations">
            <div>{elem.date}</div>
            <div>{elem.description}</div>
            <div>{elem.amount} €</div>
          </div>
        );
      })}
    </div>
  );
};

export default Account;
