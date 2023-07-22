import styles from './Message.module.css';

import PropTypes from 'prop-types';
function Message({ children }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {children}
    </p>
  );
}

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
