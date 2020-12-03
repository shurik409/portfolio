// import logo from '../img/logo.svg';
import '../styles/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

            </header>
            <div>
                <h1 class="intro">Я Саня</h1>
                <div clas="buttons">
                    <div>Кнопочки перехода будут тут</div>
                    <div class="button__about"><span>Обо мне</span></div>
                    <div class="button__works"><span>Мои работы</span></div>
                    <div class="button__contacts"><span>Связаться со мной</span></div>
                </div>
                <div class="about">
                    <div class="text"> Тут типа я скажу, на скок я крут</div>
                    <div class="skills"> Тут график моих скиллов</div>
                </div>
                <div class="works">
                    <div>Покажу что я не пиздабол и реально что-то сделал</div>
                    <div>Засуну сюда куча всяких афиш</div>
                    <div>Ну и всякий остальной дизигн</div>
                    {/* <div>Тигра дизигн</div>
                    <div>Фотовело осень дизигн</div>
                    <div>Фотовело весна дизигн</div>
                    <div>Фотовело лето дизигн</div> */}
                    <div>Сайт какой-нить</div>
                    <div>Можно ещё бота засунуть</div>
                </div>
                <div class="contacts">
                    <div>Тут всякие телефоны и соц сети</div>
                </div>
            </div>
        </div>
    );
}

export default App;
