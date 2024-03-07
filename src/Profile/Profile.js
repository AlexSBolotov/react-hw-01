import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={avatar} alt={username}></img>
      </div>
      <div className={css.infoWrapper}>
        <h2 className={css.userName}>{username}</h2>
        <p className={css.userNic}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>
      <div className={css.statWrapper}>
        <div className={css.stat}>
          <p className={css.statTitle}>followers</p>
          <p className={css.statNumber}>{followers}</p>
        </div>
        <div className={css.stat}>
          <p className={css.statTitle}>views</p>
          <p className={css.statNumber}>{views}</p>
        </div>
        <div className={css.stat}>
          <p className={css.statTitle}>likes</p>
          <p className={css.statNumber}>{likes}</p>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string,
  }),
};
export default Profile;
