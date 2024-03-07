import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import StatEl from "../StatEl/StatEl";

const Statistics = ({ title, data }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.container}>
        {data.map((el) => (
          <StatEl key={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default Statistics;
