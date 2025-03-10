import { useOptimistic, useState } from 'react';
import { User } from '../interfaces';
import { createUser } from '../mockServices';

type UserWithSending = User & { sending?: boolean };

export const UseOptimisticExample = () => {
  //Estado final
  const [users, setUsers] = useState<UserWithSending[]>([
    { name: 'John', surname: 'Doe' },
    { name: 'Jane', surname: 'Doe' },
  ]);

  async function addUserAction(formData: FormData) {
    const newUser = {
      name: formData.get('name') as string,
      surname: formData.get('surname') as string,
    };
    addOptimisticContent(newUser);
    try {
      const newDataUser = await createUser(newUser);

      setUsers((prevUsers) => [...prevUsers, newDataUser]);
    } catch (error) {
      console.error(error);
    }
  }

  //Estado provisional
  const [optimisticUsers, addOptimisticContent] = useOptimistic(
    users,
    (state: UserWithSending[], newUser: User) => {
      return [...state, { ...newUser, sending: true }];
    }
  );

  return (
    <div>
      <h4>UseOptimistic</h4>
      <form action={addUserAction} className="flex-col">
        <label htmlFor="name">Name</label>
        <input name="name" />
        <label htmlFor="surname">Surname</label>
        <input name="surname" />
        <button type="submit">Add user</button>
      </form>
      <div>
        {optimisticUsers.map((user, index) => (
          <p key={index}>
            {user.sending && 'Sending... '} {user.name} {user.surname}
          </p>
        ))}
      </div>
    </div>
  );
};
