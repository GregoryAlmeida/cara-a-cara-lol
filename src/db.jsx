import BRIARIMG from '/src/assets/img/Briar.jpg';
import BRIARBAN from '/src/assets/img-ban/Briar.jpg';
import BRIARPICK from '/src/assets/audio/BriarPick.mp3';

import WUKONGIMG from '/src/assets/img/Wukong.jfif';
import WUKONGBAN from '/src/assets/img-ban/Wukong.jpg';
import WUKONGPICK from '/src/assets/audio/WukongPick.mp3';

import REKSAIIMG from '/src/assets/img/RekSai.jpg';
import REKSAIBAN from '/src/assets/img-ban/RekSai.jpg';
import REKSAIPICK from '/src/assets/audio/RekSaiPick.mp3';

import JINXIMG from '/src/assets/img/Jinx.png';
import JINXBAN from '/src/assets/img-ban/Jinx.png';
import JINXPICK from '/src/assets/audio/JinxPick.mp3';

import XINZHAOIMG from '/src/assets/img/XinZhao.jfif';
import XINZHAOBAN from '/src/assets/img-ban/XinZhao.jpg';
import XINZHAOPICK from '/src/assets/audio/XinZhaoPick.mp3';

import XAYAHIMG from '/src/assets/img/Xayah.jpg';
import XAYAHBAN from '/src/assets/img-ban/Xayah.jpg';
import XAYAHPICK from '/src/assets/audio/XayahPick.mp3';

import YASUOIMG from '/src/assets/img/Yasuo.jfif';
import YASUOBAN from '/src/assets/img-ban/Yasuo.jpg';
import YASUOPICK from '/src/assets/audio/YasuoPick.mp3';

import BLITZIMG from '/src/assets/img/Blitz.jfif';
import BLITZBAN from '/src/assets/img-ban/Blitz.jpg';
import BLITZPICK from '/src/assets/audio/BlitzPick.mp3';
import BLITZHIDDEN from '/src/assets/audio/BlitzHidden.mp3';

import IRELIAIMG from '/src/assets/img/Irelia.jpg';
import IRELIABAN from '/src/assets/img-ban/Irelia.jpg';
import IRELIAPICK from '/src/assets/audio/IreliaPick.mp3';

import MORDEKAISERIMG from '/src/assets/img/Mordekaiser.jpg';
import MORDEKAISERBAN from '/src/assets/img-ban/Mordekaiser.jpg';
import MORDEKAISERPICK from '/src/assets/audio/MordekaiserPick.mp3';

import KAISAIMG from '/src/assets/img/Kaisa.jpg';
import KAISABAN from '/src/assets/img-ban/Kaisa.jpg';
import KAISAPICK from '/src/assets/audio/KaiSaPick.mp3';

import SERAPHINEIMG from '/src/assets/img/Seraphine.jpg';
import SERAPHINEBAN from '/src/assets/img-ban/Seraphine.jpg';
import SERAPHINEPICK from '/src/assets/audio/SeraphinePick.mp3';

import AATROXIMG from '/src/assets/img/Aatrox.png';
import AATROXBAN from '/src/assets/img-ban/Aatrox.png';
import AATROXPICK from '/src/assets/audio/AatroxPick.mp3';

import KATARINAIMG from '/src/assets/img/Katarina.png';
import KATARINABAN from '/src/assets/img-ban/Katarina.png';
import KATARINAPICK from '/src/assets/audio/KatarinaPick.mp3';

import LEONAIMG from '/src/assets/img/Leona.jpg';
import LEONABAN from '/src/assets/img-ban/Leona.jpg';
import LEONAPICK from '/src/assets/audio/LeonaPick.mp3';

import VLADMIRIMG from '/src/assets/img/Vladmir.jpg';
import VLADMIRBAN from '/src/assets/img-ban/Vladmir.jpg';
import VLADMIRPICK from '/src/assets/audio/VladmirPick.mp3';

import LOGOLOL from '/src/assets/LOL-LOGO.png';

export const champions = [
  {
    id: 0,
    name: 'Briar',
    urlboolean: true,
    urltrue: BRIARIMG,
    urlfalse: BRIARBAN,
    audiopick: BRIARPICK,
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
    audiopick: WUKONGPICK,
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
    audiopick: REKSAIPICK,
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
    audiopick: JINXPICK,
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
    audiopick: XINZHAOPICK,
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
    audiopick: XAYAHPICK,
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
    audiopick: YASUOPICK,
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
    name: 'BlitzCrank',
    urlboolean: true,
    urltrue: BLITZIMG,
    urlfalse: BLITZBAN,
    audiopick: BLITZPICK,
    audiohidden: BLITZHIDDEN,
    desc: {
      Ability:
        'Blitzcrank dispara a mão direita para pegar um inimigo no trajeto, causando dano e puxando-o em sua direção.',
      Local: 'Zaun',
      Historia:
        'Blitzcrank é um autômato enorme e praticamente indestrutível de Zaun, construído originalmente para lidar com lixo tóxico.',
    },
  },
  {
    id: 8,
    name: 'Irelia',
    urlboolean: true,
    urltrue: IRELIAIMG,
    urlfalse: IRELIABAN,
    audiopick: IRELIAPICK,
    desc: {
      Ability:
        'Irelia carrega um golpe que causa mais dano conforme o carregamento. Ela também recebe Dano Físico reduzido durante esse carregamento.',
      Local: 'Ionia',
      Historia:
        'A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori.',
    },
  },
  {
    id: 9,
    name: 'Mordekaiser',
    urlboolean: true,
    urltrue: MORDEKAISERIMG,
    urlfalse: MORDEKAISERBAN,
    audiopick: MORDEKAISERPICK,
    desc: {
      Ability:
        'Mordekaiser golpeia o chão com sua maça, causando dano a cada inimigo atingido. O dano é aumentado quando atingir um único inimigo.',
      Local: 'Noxus',
      Historia:
        'Morto e renascido duas vezes, Mordekaiser é um cruel comandante de uma época perdida.',
    },
  },
  {
    id: 10,
    name: 'Kaisa',
    urlboolean: true,
    urltrue: KAISAIMG,
    urlfalse: KAISABAN,
    audiopick: KAISAPICK,
    desc: {
      Ability:
        'KaiSa dispara uma chuva de projéteis que correm atrás de alvos próximos. Arma Viva: Chuva Icathiana é aprimorada e lança mais mísseis.',
      Local: 'O Vazio',
      Historia:
        'Capturada pelo Vazio quando era apenas uma criança, KaiSa conseguiu sobreviver por pura persistência e força de vontade.',
    },
  },
  {
    id: 11,
    name: 'Seraphine',
    urlboolean: true,
    urltrue: SERAPHINEIMG,
    urlfalse: SERAPHINEBAN,
    audiopick: SERAPHINEPICK,
    desc: {
      Ability:
        'Seraphine causa dano e Encanta os inimigos atingidos, ampliando o alcance a cada Campeão aliado ou inimigo atingido.',
      Local: 'Piltover',
      Historia:
        'Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir a alma das pessoas. O mundo canta para ela, e ela canta em resposta.',
    },
  },
  {
    id: 12,
    name: 'Aatrox',
    urlboolean: true,
    urltrue: AATROXIMG,
    urlfalse: AATROXBAN,
    audiopick: AATROXPICK,
    desc: {
      Ability:
        'Aatrox libera sua forma demoníaca, aterrorizando tropas inimigas próximas, ganhando Dano de Ataque, cura aumentada e Velocidade de Movimento. Se ele conseguir um abate, este efeito é estendido.',
      Local: 'Runeterra',
      Historia:
        'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra.',
    },
  },
  {
    id: 13,
    name: 'Vladmir',
    urlboolean: true,
    urltrue: VLADMIRIMG,
    urlfalse: VLADMIRBAN,
    audiopick: VLADMIRPICK,
    desc: {
      Ability:
        'Vladimir rouba vida do inimigo-alvo. Quando sua reserva estiver cheia, Transfusão terá os benefícios de dano e cura drasticamente aumentados por um breve período.',
      Local: 'Noxus',
      Historia:
        'Um demônio sedento pelo sangue dos mortais, Vladimir tem influenciado os acontecimentos de Noxus desde os primórdios do império.',
    },
  },
  {
    id: 14,
    name: '',
    urlboolean: true,
    urltrue: LOGOLOL,
    urlfalse: LOGOLOL,
    desc: {
      Ability:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      Local: 'Em breve...',
      Historia:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
    },
  },
  {
    id: 15,
    name: '',
    urlboolean: true,
    urltrue: LOGOLOL,
    urlfalse: LOGOLOL,
    desc: {
      Ability:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      Local: 'Em breve...',
      Historia:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
    },
  },
  {
    id: 16,
    name: 'Katarina',
    urlboolean: true,
    urltrue: KATARINAIMG,
    urlfalse: KATARINABAN,
    audiopick: KATARINAPICK,
    desc: {
      Ability:
        'Katarina gira em torno de si mesma, disparando adagas muito rapidamente e causando muito Dano Mágico nos 3 Campeões inimigos mais próximos.',
      Local: 'Noxus',
      Historia:
        'Decisiva em seus julgamentos e letal em combate, Katarina é a assassina de maior calibre de Noxus.',
    },
  },
  {
    id: 17,
    name: '',
    urlboolean: true,
    urltrue: LOGOLOL,
    urlfalse: LOGOLOL,
    desc: {
      Ability:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      Local: 'Em breve...',
      Historia:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
    },
  },
  {
    id: 18,
    name: 'Leona',
    urlboolean: true,
    urltrue: LEONAIMG,
    urlfalse: LEONABAN,
    audiopick: LEONAPICK,
    desc: {
      Ability:
        'Leona usa seu escudo para fazer seu próximo ataque básico, causando Dano Mágico adicional e atordoando o alvo.',
      Local: 'Targon',
      Historia:
        'Impregnada pelas chamas do sol, Leona é uma guerreira sagrada de Solari que defende o Monte Targon com sua Lâmina Zênite e a Proteção da Aurora.',
    },
  },
  {
    id: 19,
    name: '',
    urlboolean: true,
    urltrue: LOGOLOL,
    urlfalse: LOGOLOL,
    desc: {
      Ability:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
      Local: 'Em breve...',
      Historia:
        'Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...Em breve...',
    },
  },
];
