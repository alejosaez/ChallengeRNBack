// import { z } from 'zod';

// export const userRegistrationSchema = z.object({
//   username: z.string(),
//   email: z.string().email(),
//   password: z.string().min(8),
// });

// export const userLoginSchema = z.object({
//   username: z.string(),
//   password: z.string().min(8),
// });

import { z } from 'zod';

export const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
});
