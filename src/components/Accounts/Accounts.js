import Account from "./Account";

const Accounts = (props) => {
  return (
    <div className="accounts">
      <Account
        name={props.data.name}
        balance={props.data.balance}
        color={props.data.color}
        operations={props.data.operations}
      />
    </div>
  );
};

export default Accounts;
