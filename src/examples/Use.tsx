import { Suspense, use, useMemo, useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { getUsers } from '../mockServices';
import { User } from '../interfaces';

const UserList = ({ userPromise }: { userPromise: Promise<User[]> }) => {
  const users = use(userPromise);
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
      <Suspense fallback={<div>Loading...</div>}>
        <UserList userPromise={userPromise} />
      </Suspense>
    </div>
  );
};
