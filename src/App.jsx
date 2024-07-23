import { useEffect, useState } from 'react';
import Header from './Header/Header';
import './Header/Header.css';
import './App.css';
import Footer from './Footer/Footer';
import BRIARIMG from '/src/assets/img/Briar.jpg';
import WUKONGIMG from '/src/assets/img/Wukong.jpg';
import REKSAIIMG from '/src/assets/img/RekSai.jpg';
import JINXIMG from '/src/assets/img/Jinx.jfif';
import XINZHAOIMG from '/src/assets/img/XinZhao.jfif';
import LOLLOGOIMG from '/src/assets/LOL-LOGO.png';

function App() {
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

  const champions = [
    {
      name: 'Briar',
      url: BRIARIMG,
      desc: {
        Ability:
          'Durante o Frenesi Sanguinário, ela ganha Velocidade de Ataque e Velocidade de Movimento, e seus ataques causam Dano Físico ao redor do alvo principal.',
        Local: 'Noxus.',
        Historia:
          'A incontrolável sede de sangue de Briar, um experimento fracassado da Rosa Negra.',
      },
    },
    {
      name: 'Wukong',
      url: WUKONGIMG,
      desc: {
        Ability:
          'O próximo ataque de Wukong recebe Alcance de Ataque, causa dano adicional e reduz a Armadura do alvo por alguns segundos.',
        Local: 'Ionia.',
        Historia:
          'Wukong é um trapaceiro vastaya que usa sua força, agilidade e inteligência para confundir os oponentes e deixar a situação a seu favor.',
      },
    },
    {
      name: 'RekSai',
      url: REKSAIIMG,
      desc: {
        Ability:
          'Ela pode ativar essa habilidade para se tornar brevemente inalvejável e saltar até o alvo marcado, causando dano pesado com base na Vida perdida dele',
        Local: 'O Vazio',
        Historia:
          'A predadora perfeita, RekSai é uma criatura do Vazio sem piedade que anda por túneis no subsolo para emboscar e devorar vítimas desavisadas.',
      },
    },
    {
      name: 'Jinx',
      url: JINXIMG,
      desc: {
        Ability:
          'Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.',
        Local: 'Zaun.',
        Historia:
          'Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências.',
      },
    },
    {
      name: 'Xin Zhao',
      url: XINZHAOIMG,
      desc: {
        Ability:
          'Xin Zhao golpeia à frente com a lança, causando Lentidão e marcando os inimigos atingidos como Desafiados.',
        Local: 'Demacia.',
        Historia:
          'No passado, ele foi condenado a lutar como gladiador em Noxus, e sobreviveu à incontáveis lutas, mas depois de ser libertado por forças demacianas, ele prometeu sua vida e lealdade aos seus...',
      },
    },
    {
      name: 'Em breve...',
      url: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      name: 'Em breve...',
      url: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      name: 'Em breve...',
      url: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      name: 'Em breve...',
      url: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
    {
      name: 'Em breve...',
      url: LOLLOGOIMG,
      desc: {
        Ability:
          'Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....Habilidadade....',
        Local: 'Local...Em breve...',
        Historia:
          'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      },
    },
  ];
  useEffect(() => {
    setYourChamp(champions[Math.floor(Math.random() * champions.length)]);
  }, []);
  console.log(yourChamp);

  return (
    <div>
      <Header />
      <section>
        <div className="div-game">
          {champions.map(({ name, url, desc }) => (
            <span id={crypto.randomUUID()}>
              <img className="img" src={url} alt={name} />
              <p className="p-img">
                <strong>Nome:</strong> {name} <br />
                <strong>Habilidade:</strong> {desc.Ability} <br />
                <strong>Local:</strong> {desc.Local} <br />
                <strong>História:</strong> {desc.Historia}
              </p>
            </span>
          ))}
        </div>
        <div className="div-myCaracter">
          <span>
            <h1>Seu personagem</h1>
            <img src={yourChamp.url} alt="" />
          </span>
          <p>
            <strong>Nome:</strong> {yourChamp.name}
            <strong>Habilidade:</strong> {yourChamp.desc.Ability}
            <strong>Local:</strong> {yourChamp.desc.Local}
            <strong>História:</strong> {yourChamp.desc.Historia}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
