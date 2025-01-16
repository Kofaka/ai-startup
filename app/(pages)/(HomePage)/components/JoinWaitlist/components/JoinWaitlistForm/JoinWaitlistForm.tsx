'use client';

import {
  ChangeEvent,
  useActionState,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { toast } from 'react-toastify';
import clsx from 'clsx';
// Actions
import {
  joinWaitlistAction,
  JoinWaitlistRequestData,
  JoinWaitlistRequestField,
  JoinWaitlistRequestState,
} from '@/app/lib/actions/joinWaitlistAction';
// Icons
import SuccessIcon
  from '@/app/(pages)/(HomePage)/components/JoinWaitlist/components/JoinWaitlistForm/images/success.svg';
// UI
import { Button, ButtonColor, UIComponentSize } from '@/app/ui';
// Styles
import styles from './JoinWaitlistForm.module.scss';

const initialState: JoinWaitlistRequestState = {
  data: {
    [JoinWaitlistRequestField.Email]: '',
  },
  message: null,
  errors: null,
};

export const JoinWaitlistForm = () => {
  const [formValues, setFormValues] = useState<JoinWaitlistRequestState['data']>(
    initialState.data
  );
  const [state, formAction] = useActionState(
    joinWaitlistAction,
    initialState
  );

  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSuccessFormSend = (data: JoinWaitlistRequestState['data']) => {
    setFormValues(initialState.data);
    emailInputRef.current?.blur();
    toast.success(
      `You have successfully joined the waitlist${data?.email ? ` with email ${data.email}` : ''}!`,
      {
        icon: <SuccessIcon width="20px" height="20px"/>,
        theme: 'dark',
        autoClose: 5000,
      });
  }

  useEffect(() => {
    if (!state.errors && state.message) {
      handleSuccessFormSend(state.data);
    }
  }, [state]);

  const handleFormFieldsChange = <Value extends string>(
    key: JoinWaitlistRequestField,
    value: Value
  ) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  const handleEmailFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFormFieldsChange<JoinWaitlistRequestData[JoinWaitlistRequestField.Email]>(
      JoinWaitlistRequestField.Email,
      e.target.value);
  }

  const errorsList: string[] = useMemo(() => {
    if (!state.errors) {
      return [];
    }

    return Object.entries(state.errors)
      .map(([, value]) => value)
      .flat()
      .filter(Boolean);
  }, [state.errors]);

  return (
    <form
      className={styles.root}
      action={formAction}
    >
      <input
        ref={emailInputRef}
        className={clsx(
          styles.input,
          { [styles.error]: errorsList?.length }
        )}
        name={JoinWaitlistRequestField.Email}
        value={formValues?.email}
        onChange={handleEmailFieldChange}
        placeholder="Your email"
      />

      {errorsList?.length > 0 && (
        <div className={styles.errorsWrapper}>
          {errorsList.map((err, index) => (
            <p key={index} className={styles.errorMessage}>{err}</p>
          ))}
        </div>
      )}

      <Button
        className={styles.cta2}
        color={ButtonColor.White}
        size={UIComponentSize.Large}
        type="submit"
      >
        Join waitlist
      </Button>
    </form>
  );
};

export default JoinWaitlistForm;
