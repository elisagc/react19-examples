import React, { RefObject, useRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref: RefObject<HTMLInputElement | null>;
}
const MyInput = (props: InputProps) => <input {...props} type="text" />;

export const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input by useRef in parent</button>
    </div>
  );
};
