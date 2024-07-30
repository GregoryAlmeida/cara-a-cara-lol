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
  const [audio, setAudio] = useState('');

  const randomChamp = (props) => {
    setYourChamp(props);
    setAudio(props.audiopick);
    setModal(false);
  };

  return (
    <div>
      <audio src={audio} autoPlay />

      <Header />
      <section>
        {yourChamp && (
          <div className="div-game">
            {champions.map(
              ({
                id,
                name,
                urlboolean,
                urltrue,
                urlfalse,
                desc,
                audiohidden,
              }) => (
                <span
                  key={id}
                  onClick={() => {
                    champions[id].urlboolean = !champions[id].urlboolean;
                    setOpacity(0);
                    setModal(true);
                    setTimeout(() => {
                      setModal(false);
                    });

                    if (yourChamp.id === id) setAudio(audiohidden);
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
        )}
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
                setYourChamp(null);
              }}
            >
              🔁
              <strong className="info-mobile">Info ⬇</strong>
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
              <div className="button-select">
                <button onClick={() => setSelectChamp(false)}>
                  Escolher Campeão
                </button>
                OU
                <button
                  onClick={() =>
                    randomChamp(
                      champions[Math.floor(Math.random() * champions.length)],
                    )
                  }
                >
                  Campeão Aleatório
                </button>
              </div>
            ) : (
              <div className="modal-selectChamp">
                {champions.map(({ id, name, urltrue, audiopick }) => (
                  <img
                    src={urltrue}
                    alt={name}
                    key={id}
                    onClick={() => {
                      setYourChamp(champions[id]);
                      setModal(false);
                      setAudio(audiopick);
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
