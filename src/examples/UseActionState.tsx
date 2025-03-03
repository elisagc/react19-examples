import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createUserActionForm } from '../actions';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Pending from useFormStatus...' : 'Create'}
    </button>
  );
};

export const UseActionStateExample = () => {
  const initialState = null;
  const [state, formAction, isPending] = useActionState(
    createUserActionForm,
    initialState
  );

  return (
    <>
      <title>UseActionState example</title>
      <h4>UseActionState & useFormStatus</h4>
      <form action={formAction} className="flex-col">
        <label htmlFor="name">Name</label>
        <input name="name" />
        <label htmlFor="surname">Surname</label>
        <input name="surname" />
        <FormButton />
        {isPending && <p>isPending from useActionState</p>}
        {state && <p>{JSON.stringify(state)}</p>}
      </form>
    </>
  );
};
