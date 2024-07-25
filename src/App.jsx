import { useState } from 'react';
import Header from './Header/Header';
import './Header/Header.css';
import './App.css';
import './Modal.css';
import Footer from './Footer/Footer';
import { champions } from './db';

function App() {
  const [modal, setModal] = useState(true);
  const [selectChamp, setSelectChamp] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [yourChamp, setYourChamp] = useState(null);

  return (
    <div>
      <Header />
      <section>
        <div className="div-game">
          {champions.map(
            ({ id, name, urlboolean, urltrue, urlfalse, desc }) => (
              <span
                id={id}
                onClick={() => {
                  champions[id].urlboolean = !champions[id].urlboolean;
                  setOpacity(0);
                  setModal(true);
                  setTimeout(() => {
                    setModal(false);
                  });
                }}
              >
                <img
                  className="img"
                  src={urlboolean ? urltrue : urlfalse}
                  alt={name}
                />
                <p className="p-img">
                  <strong>Nome:</strong> {name} <br />
                  <strong>Habilidade:</strong> {desc.Ability} <br />
                  <strong>Local:</strong> {desc.Local} <br />
                  <strong>História:</strong> {desc.Historia}
                </p>
              </span>
            ),
          )}
        </div>
        {yourChamp && (
          <div className="div-myCaracter">
            <span>
              <h1>Seu personagem</h1>
              <img src={yourChamp.urltrue} alt="" />
            </span>
            <button
              onClick={() => {
                setSelectChamp(true);
                setModal(true);
                setOpacity(1);
              }}
            >
              🔁
            </button>

            <p className="p-yourChamp">
              <strong>Nome:</strong> {yourChamp.name}
              <strong>Habilidade:</strong> {yourChamp.desc.Ability}
              <strong>Local:</strong> {yourChamp.desc.Local}
              <strong>História:</strong> {yourChamp.desc.Historia}
            </p>
          </div>
        )}

        {modal && (
          <div className="modal" style={{ opacity: opacity }}>
            <h1>ESCOLHA</h1>
            {selectChamp ? (
              <div>
                <button onClick={() => setSelectChamp(false)}>
                  Escolher Campeão
                </button>
                OU
                <button
                  onClick={() => {
                    setYourChamp(
                      champions[Math.floor(Math.random() * champions.length)],
                    );
                    setModal(false);
                  }}
                >
                  Campeão Aleatório
                </button>
              </div>
            ) : (
              <div className="modal-selectChamp">
                {champions.map(({ id, name, urltrue }) => (
                  <img
                    src={urltrue}
                    alt=""
                    key={name}
                    onClick={() => {
                      setYourChamp(champions[id]);
                      setModal(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
