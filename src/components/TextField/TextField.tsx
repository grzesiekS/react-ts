import React from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  fn?: () => string;
  person: Person;
}

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
}

export default TextField;