import { z } from "zod";

export const envSchema = z.object({
  username: z.string(),
  password: z.string(),
  URL: z.string(),  
  PROJECT_KEY: z.string(),
  PROJECT_NAME: z.string(),
  VERSION: z.string().optional().nullable(),
  JIRA_KEY: z.string(),
  CYCLE: z.string().optional().nullable(),
//   BASE_URL: z.string(),
//   BASE_API_URL: z.string(),
//   AUTH_URL: z.string(),
//   TOKEN: z.string(),
});