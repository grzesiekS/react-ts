import React, { useEffect, useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  fn?: () => string;
  person: Person;
}

interface Title {
  text: string;
}

const TextField: React.FC<Props> = ({ text, person, fn }) => {
  const [title, setTitle] = useState<Title>({ text: 'Hello World!' });

  useEffect(() => {
    setTitle({ text: `Hello ${person.firstName} ${person.lastName}` });
  }, [person.firstName, person.lastName])

  return (
    <div>
      <h2>{title.text}</h2>
      <input />
    </div>
  );
}

export default TextField;