import clsx from 'clsx';
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
      <svg
        className={clsx(styles.icon, styles[defaultSize])}
        width="24"
        height="24"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            cx="12"
            cy="12" r="9.5"
            fill="none"
            strokeWidth="1"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dasharray"
              dur="2s"
              calcMode="spline"
              values="0 150;42 150;42 150;42 150"
              keyTimes="0;0.475;0.95;1"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              dur="2s"
              calcMode="spline"
              values="0;-16;-59;-59"
              keyTimes="0;0.475;0.95;1"
              keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
              repeatCount="indefinite"
            />
          </circle>
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="4s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
