import React, { useState } from 'react';
import { User, UserState } from '../interfaces';
import { createUser } from '../mockServices';

const FormButton = ({ pending }: { pending: boolean }) => {
  return (
    <button disabled={pending}>{pending ? 'Pending...' : 'Create'}</button>
  );
};

export const BeforeUseActionState = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [state, setState] = useState<UserState | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleCreateUser = async (user: User) => {
    setIsPending(true);
    try {
      const createdUser = await createUser(user);
      setState({ user: createdUser });
      setName('');
      setSurname('');
    } catch (error) {
      console.error(error);
      setState({ error: 'Error al crear el usuario. Inténtalo de nuevo.' });
    } finally {
      setIsPending(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateUser({ name, surname });
  };

  return (
    <>
      <h4>Before useActionState</h4>
      <form onSubmit={handleSubmit} className="flex-col">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="surname">Surname</label>
        <input
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <FormButton pending={isPending} />

        {isPending && <p>Submitting...</p>}
        {state && state.user && (
          <p>User created: {JSON.stringify(state.user)}</p>
        )}
        {state && state.error && <p>{state.error}</p>}
      </form>
    </>
  );
};
