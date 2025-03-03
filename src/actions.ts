import { UserState } from './interfaces';
import { createUser } from './mockServices';

export const createUserActionForm = async (
  prevState: UserState | null,
  formData: FormData
): Promise<UserState> => {
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;
  console.log({ prevState, entries: Object.fromEntries(formData.entries()) });

  try {
    const user = await createUser({ name, surname });
    return { user };
  } catch (error) {
    console.error(error);

    return {
      error: 'Error al crear el usuario. Inténtalo de nuevo.',
      user: prevState?.user,
    };
  }
};
