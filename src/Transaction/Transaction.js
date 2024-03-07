import PropTypes from "prop-types";
import css from "./Transaction.module.css";

const Transaction = ({ type, amount, currency, odd }) => {
  return (
    <tr className={odd % 2 === 0 ? css.oddRow : css.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  odd: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
