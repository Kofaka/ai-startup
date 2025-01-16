import { z } from 'zod';

export enum JoinWaitlistRequestField {
  Email = 'email',
}

export type JoinWaitlistRequestData = {
  [JoinWaitlistRequestField.Email]: string;
};

export type JoinWaitlistRequestErrors = {
  [JoinWaitlistRequestField.Email]?: string[];
}

export type JoinWaitlistRequestState = {
  data?: JoinWaitlistRequestData | null;
  errors?: JoinWaitlistRequestErrors | null;
  message?: string | null;
};

const JoinWaitlistSchema = z.object({
  [JoinWaitlistRequestField.Email]: z.string()
    .email({ message: 'Please enter a valid email address.' })
    .min(5, { message: 'Email address must be longer than 5 characters.' })
    .max(255, { message: 'Email address must be less than 255 characters.' })
    .refine((email) => !/\.ru$/.test(email), {
      message: 'No russian domains allowed.',
    })
    .refine((email) => !/\.by$/.test(email), {
      message: 'No belarusian domains allowed.',
    }),
});

export async function joinWaitlistAction(
  prevState: JoinWaitlistRequestState,
  formData: FormData
): Promise<JoinWaitlistRequestState> {
  const validatedFields = JoinWaitlistSchema.safeParse({
    email: formData.get(JoinWaitlistRequestField.Email),
  });

  let result: JoinWaitlistRequestState;

  if (!validatedFields.success) {
    result = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to join waitlist.',
    };

    return result;
  }

  result = {
    data: validatedFields.data,
    message: 'You have successfully joined the waitlist!',
  };

  // TODO: add some API to simulate sending email
  console.log('Sending an email to the waitlist:', validatedFields.data.email);

  return result;
}
