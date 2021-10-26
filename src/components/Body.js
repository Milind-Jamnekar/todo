function List({ checked, task }) {
  return (
    <div class="list">
      <div className="check">
        {checked && <ion-icon name="checkmark-outline"></ion-icon>}
      </div>
      <h2>{task}</h2>
    </div>
  );
}

const list = [
  {
    task: "Release on Github 🎉",
    checked: false,
  },
  {
    task: "Support for dark/light mode",
    checked: true,
  },
  {
    task: "Make UI ",
    checked: true,
  },

  {
    task: "Add scss on react project",
    checked: true,
  },

  {
    task: "Create React Project",
    checked: true,
  },
];

function Body() {
  return (
    <div className="list-container">
      <div className="lists">
        {list.map((el) => (
          <List checked={el.checked} task={el.task} />
        ))}
      </div>
    </div>
  );
}

export default Body;
