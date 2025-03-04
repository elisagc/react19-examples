import { Suspense, use, useMemo, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import { getUsers } from '../mockServices';
import { User } from '../interfaces';

const UserListWithSuspense = ({
  userPromise,
}: {
  userPromise: Promise<User[]>;
}) => {
  const users = use(userPromise);
  return users.map((user, index) => (
    <p key={index}>
      {user.name} {user.surname}
    </p>
  ));
};

const UserListWithoutSuspense = ({
  userPromise,
}: {
  userPromise: Promise<User[]>;
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setloading] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      setloading(true);
      const users = await userPromise;
      setUsers(users);
      setloading(false);
    };
    getUsers();
  }, [userPromise]);

  if (loading) return <div>Loading...</div>;
  return users.map((user, index) => (
    <p key={index}>
      {user.name} {user.surname}
    </p>
  ));
};

export const UseExample = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const userPromise = useMemo(() => getUsers(), []);

  return (
    <div>
      <title>Use example</title>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
      <h4>With Suspense using use()</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <UserListWithSuspense userPromise={userPromise} />
      </Suspense>
      <h4>Without Suspense using useEffect and useState</h4>
      <UserListWithoutSuspense userPromise={userPromise} />
    </div>
  );
};
