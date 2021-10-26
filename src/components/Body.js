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

function Body({ list }) {
  return (
    <div className="list-container">
      <div className="lists">
        {list.map((el) => (
          <List key={el.task} checked={el.checked} task={el.task} />
        ))}
      </div>
    </div>
  );
}

export default Body;
