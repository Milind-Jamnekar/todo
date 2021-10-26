function Header() {
  return (
    <>
      <div className="todo-nav">
        <nav>
          <div className="todo-nav__exit"></div>
          <div className="todo-nav__zoom"></div>
          <div className="todo-nav__mini"></div>
        </nav>
        <h1>Milind</h1>
      </div>

      <div className="todo-container">
        <div className="flex">
          <div className="flex">
            <div className="todo-container__btn ">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="todo-container__btn">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>

          <div className="todo-container__btn active">
            <ion-icon name="moon-outline"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
