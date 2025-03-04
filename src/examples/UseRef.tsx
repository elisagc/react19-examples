import { RefObject, useRef } from 'react';

interface InputProps {
  ref: RefObject<HTMLInputElement | null>;
}

const MyInput = (props: InputProps) => {
  return <input type="text" ref={props.ref} />;
};

export const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input by useRef in parent</button>
    </div>
  );
};
