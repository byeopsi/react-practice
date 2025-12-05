import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  let [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };
  const onRemove = (getId) => {
    const nextNames = names.filter((name) => name.id !== getId);
    setNames(nextNames);
  };
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
