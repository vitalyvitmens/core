"use server";

import { z } from "zod";
import { profileSchema } from "@/app/entities/user/profile";
import { getAppSessionStrictServer } from "@/app/entities/user/session.server";
import { updateProfileUseCase } from "@/app/entities/user/_use-cases/update-profile";

const propsSchema = z.object({
  userId: z.string(),
  data: profileSchema.partial(),
});

const resultSchema = z.object({
  profile: profileSchema,
});

export const updateProfileAction = async (
  props: z.infer<typeof propsSchema>,
) => {
  const { userId, data } = propsSchema.parse(props);

  const session = await getAppSessionStrictServer();

  const user = await updateProfileUseCase.exec({
    session,
    data,
    userId,
  });

  return resultSchema.parseAsync({
    profile: user,
  });
};
