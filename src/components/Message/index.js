import PropTypes from "prop-types";
import classNames from "classnames";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ru } from 'date-fns/locale'

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe }) => (
  <div className={classNames("message", {"message--isme": isMe})}>
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
    </div>
    <div className="message__content">
      <div className="message__buble">
        <div className="message__text">
          <p>{text}</p>
        </div>
      </div>
      <span className="message__date">{formatDistanceToNow(date, {addSuffix: true, locale: ru})}</span>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
};

export default Message;
