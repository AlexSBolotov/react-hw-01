import PropTypes from "prop-types";
import css from "./TransactionsList.module.css";
import Transaction from "../Transaction/Transaction";

const TransactionsList = ({ data }) => {
  return (
    <table className={css.list}>
      <thead>
        <tr className={css.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, type, amount, currency }, idx) => (
          <Transaction
            key={id}
            odd={idx}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TransactionsList;
