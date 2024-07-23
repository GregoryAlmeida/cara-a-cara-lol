import React from 'react';
import IMGLOGO from '/src/assets/LOL-LOGO.png';

export default function Header() {
  return (
    <header>
      <img src={IMGLOGO} alt="Cara a Cara LOL" />
      <h1>Cara a Cara LOL</h1>
    </header>
  );
}
