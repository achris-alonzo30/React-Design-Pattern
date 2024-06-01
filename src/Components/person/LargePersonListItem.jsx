export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <aside className="flex flex-col items-center border border-slate-500 rounded-lg p-4 py-1 my-4 bg-white">
      <hgroup className="flex flex-col items-center text-start gap-2">
        <h4 className="text-lg text-slate-500">
          <strong>Name</strong>: {name}
        </h4>
        <p className="text-lg text-slate-500">
          <strong>Age</strong>: {age}
        </p>
        <p className="text-lg text-slate-500">
          <strong>Hair Color</strong>: {hairColor}
        </p>
        <ul className="flex gap-2 text-lg text-slate-500">
          <strong>Hobbies: </strong>
          {hobbies.map((hobby, i) => (
            <li key={i}>{hobby}</li>
          ))}
        </ul>
      </hgroup>
    </aside>
  );
};
