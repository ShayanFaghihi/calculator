function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">calc</div>
        <div className="theme-changer">
          <p>Theme</p>
          <div className="theme-check"></div>
        </div>
      </header>
      <section className="calculator-section">
        <div className="calculator-panel">399,981</div>
        <div className="calculator">
          <div className="row">
            <span className="num main">7</span>
            <span className="num main">8</span>
            <span className="num main">9</span>
            <span className="del">Del</span>
          </div>
          <div className="row">
            <span className="num main">4</span>
            <span className="num main">5</span>
            <span className="num main">6</span>
            <span className="add main">+</span>
          </div>
          <div className="row">
            <span className="num main">1</span>
            <span className="num main">2</span>
            <span className="num main">3</span>
            <span className="substraction main">-</span>
          </div>
          <div className="row">
            <span className="decimal main">.</span>
            <span className="num main">0</span>
            <span className="division main">/</span>
            <span className="multiply main">x</span>
          </div>
          <div className="row">
            <span className="reset">Reset</span>
            <span className="equal">=</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
