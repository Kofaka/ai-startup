import clsx from 'clsx';
// Icons
import AnimatedCircleIcon from '@/app/ui/Spinner/animated-circle.svg';
// Ui
import { UIComponentSize } from '@/app/ui';
// Styles
import styles from './Spinner.module.scss';

export enum SpinnerSize {
  ExtraLarge = 'extraLarge',
  UltraLarge = 'ultraLarge',
}

interface SpinnerProps {
  spinning?: boolean;
  size?: UIComponentSize | SpinnerSize;
  fullScreen?: boolean;
  className?: string;
}

export const Spinner = ({
  spinning,
  size,
  fullScreen,
  className
}: SpinnerProps) => {
  if (!spinning) {
    return null;
  }

  const defaultSize = size || (fullScreen ? SpinnerSize.UltraLarge : UIComponentSize.Medium);

  return (
    <div className={clsx(styles.root, {
      [styles.fullScreen]: fullScreen,
    }, className)}>
      <AnimatedCircleIcon className={clsx(styles.icon, styles[defaultSize])} viewBox="0 0 24 24" />
    </div>
  );
};

export default Spinner;
