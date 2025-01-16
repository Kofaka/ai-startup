import clsx from 'clsx';
// Styles
import styles from './Toggle.module.scss';

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
  className?: string;
};

export const Toggle = ({
  checked,
  onChange,
  label,
  className,
}: ToggleProps) => {
  return (
    <label className={clsx(styles.root, className)}>
      <input
        className={styles.input}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />

      <div className={styles.slider}/>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export default Toggle;
