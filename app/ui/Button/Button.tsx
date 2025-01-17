import {
  forwardRef,
  ComponentPropsWithoutRef,
} from 'react';
import clsx from 'clsx';
// UI Components
import { Spinner, UIComponentSize } from '@/app/ui';
// Styles
import styles from './Button.module.scss';

export enum ButtonColor {
  Dark = 'dark',
  Purple = 'purple',
  White = 'white',
}

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  color?: ButtonColor;
  size?: UIComponentSize;
  fullWidth?: boolean;
  outerBorder?: boolean;
  isLoading?: boolean;
} & ({
  outerBorder?: boolean;
  outerBorderBold?: never;
} | {
  outerBorder?: never;
  outerBorderBold?: boolean;
});

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    color = ButtonColor.Dark,
    size = UIComponentSize.Medium,
    fullWidth,
    outerBorder,
    outerBorderBold,
    isLoading,
    disabled,
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      className={clsx(styles.root, styles[color], styles[size], {
        [styles.fullWidth]: fullWidth,
        [styles.outerBorder]: outerBorder,
        [styles.outerBorderBold]: outerBorderBold,
        [styles.loading]: isLoading,
      }, className)}
      disabled={disabled || isLoading}
      {...rest}
    >
      <span className={styles.content}>{children}</span>

      <Spinner size={size} spinning={isLoading} />
    </button>
  );
});

Button.displayName = 'Button';
