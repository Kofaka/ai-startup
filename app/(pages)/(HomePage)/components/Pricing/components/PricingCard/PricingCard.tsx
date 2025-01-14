import clsx from 'clsx';
// Ui
import { Button, ButtonColor, UIComponentSize, } from '@/app/ui';
// Icons
import CheckIcon
  from '@/app/(pages)/(HomePage)/components/Pricing/components/PricingCard/images/check.svg';
// Styles
import styles from './PricingCard.module.scss';

export enum PricingCardPayType {
  Monthly = 'monthly',
  Annual = 'annual',
}

export type PricingCardData = {
  id: string;
  label: string;
  price: {
    [PricingCardPayType.Monthly]: number;
    [PricingCardPayType.Annual]: number;
  };
  options: string[];
};

type PricingCardProps = {
  data: PricingCardData;
  isActive: boolean;
  payType: PricingCardPayType;
  onCtaClick: () => void;
  className?: string;
};

export const PricingCard = ({
  data,
  isActive,
  payType,
  onCtaClick,
  className,
}: PricingCardProps) => {
  return (
    <div className={clsx(styles.root, {
      [styles.active]: isActive,
    }, className)}>
      <div className={styles.header}>
        <p className={styles.title}>
          {data.label}
        </p>
        <p className={styles.price}>
          ${data.price[payType]}/mo
        </p>
      </div>

      <div className={styles.body}>
        <ul>
          {data.options.map((option) => (
            <li key={option} className={styles.optionsListItem}>
              <CheckIcon
                className={styles.optionsListItemIcon}
                viewBox="0 0 15 15"
                aria-hidden={true}
              />
              {option}
            </li>
          ))}
        </ul>

        <Button
          color={isActive ? ButtonColor.Purple : ButtonColor.Dark}
          size={UIComponentSize.Large}
          onClick={onCtaClick}
          fullWidth
        >
          Join waitlist
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
