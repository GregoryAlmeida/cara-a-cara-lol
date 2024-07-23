import { useEffect, useState } from 'react';
import Header from './Header/Header';
import './Header/Header.css';
import './App.css';
import './Modal.css';
import Footer from './Footer/Footer';
import BRIARIMG from '/src/assets/img/Briar.jpg';
import BRIARBAN from '/src/assets/img-ban/Briar.jpg';
import WUKONGIMG from '/src/assets/img/Wukong.jfif';
import WUKONGBAN from '/src/assets/img-ban/Wukong.jpg';
import REKSAIIMG from '/src/assets/img/RekSai.jpg';
import REKSAIBAN from '/src/assets/img-ban/RekSai.jpg';
import JINXIMG from '/src/assets/img/Jinx.png';
import JINXBAN from '/src/assets/img-ban/Jinx.png';
import XINZHAOIMG from '/src/assets/img/XinZhao.jfif';
import XINZHAOBAN from '/src/assets/img-ban/XinZhao.jpg';
import XAYAHIMG from '/src/assets/img/Xayah.jpg';
import XAYAHBAN from '/src/assets/img-ban/Xayah.jpg';
import YASUOIMG from '/src/assets/img/Yasuo.jfif';
import YASUOBAN from '/src/assets/img-ban/Yasuo.jpg';
import LOLLOGOIMG from '/src/assets/LOL-LOGO.png';

function App() {
  const [modal, setModal] = useState(true);
  const [selectChamp, setSelectChamp] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const [yourChamp, setYourChamp] = useState({
    name: 'Briar',
    url: BRIARIMG,
    desc: {
      Ability:
        'Durante o Frenesi Sanguinário, ela ganha Velocidade de Ataque e Velocidade de Movimento, e seus ataques causam Dano Físico ao redor do alvo principal.',
      Local: 'Noxus.',
      Historia:
        'A incontrolável sede de sangue de Briar, um experimento fracassado da Rosa Negra.',
    },
  });

  const [champions, setChampions] = useState([
    {
      id: 0,
      name: 'Briar',
      urlboolean: true,
      urltrue: BRIARIMG,
      urlfalse: BRIARBAN,
      desc: {
        Ability:
          'Durante o Frenesi Sanguinário, ela ganha Velocidade de Ataque e Velocidade de Movimento, e seus ataques causam Dano Físico ao redor do alvo principal.',
        Local: 'Noxus.',
        Historia:
          'A incontrolável sede de sangue de Briar, um experimento fracassado da Rosa Negra.',
      },
    },
    {
      id: 1,
      name: 'Wukong',
      urlboolean: true,
      urltrue: WUKONGIMG,
      urlfalse: WUKONGBAN,
      desc: {
        Ability:
          'O próximo ataque de Wukong recebe Alcance de Ataque, causa dano adicional e reduz a Armadura do alvo por alguns segundos.',
        Local: 'Ionia.',
        Historia:
          'Wukong é um trapaceiro vastaya que usa sua força, agilidade e inteligência para confundir os oponentes e deixar a situação a seu favor.',
      },
    },
    {
      id: 2,
      name: 'RekSai',
      urlboolean: true,
      urltrue: REKSAIIMG,
      urlfalse: REKSAIBAN,
      desc: {
        Ability:
          'Ela pode ativar essa habilidade para se tornar brevemente inalvejável e saltar até o alvo marcado, causando dano pesado com base na Vida perdida dele',
        Local: 'O Vazio',
        Historia:
          'A predadora perfeita, RekSai é uma criatura do Vazio sem piedade que anda por túneis no subsolo para emboscar e devorar vítimas desavisadas.',
      },
    },
    {
      id: 3,
      name: 'Jinx',
      urlboolean: true,
      urltrue: JINXIMG,
      urlfalse: JINXBAN,
      desc: {
        Ability:
          'Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.',
        Local: 'Zaun.',
        Historia:
          'Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.',
      },
    },
    {
      id: 4,
      name: 'Xin Zhao',
      urlboolean: true,
      urltrue: XINZHAOIMG,
      urlfalse: XINZHAOBAN,
      desc: {
        Ability:
          'Xin Zhao golpeia à frente com a lança, causando Lentidão e marcando os inimigos atingidos como Desafiados.',
        Local: 'Demacia.',
        Historia:
          'No passado, ele foi condenado a lutar como gladiador em Noxus, e sobreviveu à incontáveis lutas, mas depois de ser libertado por forças demacianas, ele prometeu sua vida e lealdade aos seus...',
      },
    },
    {
      id: 5,
      name: 'Xayah',
      urlboolean: true,
      urltrue: XAYAHIMG,
      urlfalse: XAYAHBAN,
      desc: {
        Ability:
          'Xayah recolhe todas as Plumas que caíram, causando dano e enraizando os inimigos.',
        Local: 'Ionia',
        Historia:
          'Mortal e precisa, Xayah é uma vastaya revolucionária que trava sua própria batalha para salvar seu povo.',
      },
    },
    {
      id: 6,
      name: 'Yasuo',
      urlboolean: true,
      urltrue: YASUOIMG,
      urlfalse: YASUOBAN,
      desc: {
        Ability:
          'Cria uma parede movediça que bloqueia todos os projéteis inimigos por 4 segundos.',
        Local: 'Ionia',
        Historia:
          'Yasuo, um ioniano extremamente determinado, é também um ágil espadachim que usa o próprio ar como arma para enfrentar seus inimigos.',
      },
    },
    {
      id: 7,
      name: 'Em breve...',
      urlboolean: true,
      urltrue: LOLLOGOIMG,
      urlfalse: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      id: 8,
      name: 'Em breve...',
      urlboolean: true,
      urltrue: LOLLOGOIMG,
      urlfalse: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      id: 9,
      name: 'Em breve...',
      urlboolean: true,
      urltrue: LOLLOGOIMG,
      urlfalse: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
  ]);

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
                  setChampions(champions);
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
        <div className="div-myCaracter">
          <span>
            <h1>Seu personagem</h1>
            <img src={yourChamp.urltrue} alt="" />
          </span>
          <button
            onClick={() => {
              setSelectChamp(true);
              setModal(true);
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
