import i from './index.module.css';
import PropTypes from 'prop-types';
export default function Button({ onClick, title }) {
  return (
    <button type="button" onClick={onClick} className={i.Button}>
      {title}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
