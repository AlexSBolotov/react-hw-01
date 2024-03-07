import PropTypes from "prop-types";
import css from "./FriendItem.module.css";

const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.img} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
