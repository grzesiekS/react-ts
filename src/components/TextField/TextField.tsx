import React, { useEffect, useRef, useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  fn?: () => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Title {
  text: string;
}

const TextField: React.FC<Props> = ({ text, person, fn, handleChange }) => {
  const [title, setTitle] = useState<Title>({ text: 'Hello World!' });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle({ text: `Hello ${person.firstName} ${person.lastName}` });
  }, [person.firstName, person.lastName])

  return (
    <div>
      <h2>{title.text}</h2>
      <input 
        ref={inputRef}
        onChange={event => handleChange(event)}
      />
    </div>
  );
}

export default TextField;