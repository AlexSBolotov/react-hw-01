import PropTypes from "prop-types";
import css from "./StatEl.module.css";
import getRandomColor from "../helpers/randomColor";

const StatEl = ({ label, percentage }) => {
  return (
    <li className={css.el} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.span}>{label}</span>
      <span className={css.span}>{percentage}</span>
    </li>
  );
};
StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatEl;
