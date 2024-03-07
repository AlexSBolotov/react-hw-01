import PropTypes from "prop-types";
import css from "./FriendsList.module.css";
import FriendItem from "../FriendItem/FriendItem";

const FriendsList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, name, isOnline, avatar }) => (
        <FriendItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default FriendsList;
