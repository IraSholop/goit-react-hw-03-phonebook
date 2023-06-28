import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={css.input}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
