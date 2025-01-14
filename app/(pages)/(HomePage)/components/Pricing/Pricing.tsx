'use client';

import { useState } from 'react';
// Ui
import { Toggle } from '@/app/ui';
// Components
import { PricingCard, PricingCardData, PricingCardPayType } from '@/app/(pages)/(HomePage)/components/Pricing/components';
// Styles
import styles from './Pricing.module.scss';

const pricingPlans: PricingCardData[] = [
  {
    id: 'starter',
    label: 'Pricing',
    price: {
      [PricingCardPayType.Monthly]: 35,
      [PricingCardPayType.Annual]: 29,
    },
    options: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
    ],
  },
  {
    id: 'pro',
    label: 'Pro',
    price: {
      [PricingCardPayType.Monthly]: 95,
      [PricingCardPayType.Annual]: 79,
    },
    options: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization',
    ],
  },
  {
    id: 'business',
    label: 'Business',
    price: {
      [PricingCardPayType.Monthly]: 175,
      [PricingCardPayType.Annual]: 149,
    },
    options: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization',
      'Multi-user access',
      'API integration',
    ],
  },
];

export const Pricing = () => {
  const [payType, setPayType] = useState<PricingCardPayType>(PricingCardPayType.Annual);
  const [activePlan, setActivePlan] = useState<PricingCardData['id']>(pricingPlans[1].id);

  const handlePayTypeChange = () => {
    setPayType(
      payType === PricingCardPayType.Monthly
        ? PricingCardPayType.Annual
        : PricingCardPayType.Monthly
    )
  }

  const handlePlanChange = (id: PricingCardData['id']) => {
    setActivePlan(id);
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Pricing
      </h2>

      <p className={styles.description}>
        Choose the right plan to meet your SEO needs and start optimizing today.
      </p>

      <div className={styles.toggleWrapper}>
        <Toggle
          label="Billed Yearly"
          checked={payType === PricingCardPayType.Annual}
          onChange={handlePayTypeChange}
        />
      </div>

      <ul className={styles.optionsList}>
        {pricingPlans.map((plan) => (
          <li key={plan.id}>
            <PricingCard
              className={styles.optionsListItem}
              data={plan}
              isActive={activePlan === plan.id}
              payType={payType}
              onCtaClick={() => handlePlanChange(plan.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pricing;
