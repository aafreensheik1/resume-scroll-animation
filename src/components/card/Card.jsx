import React from 'react';
import './card.scss';

// const cards = document.querySelectorAll('.card-container');

// window.addEventListener('scroll', checkCards);

// checkCards();

// function checkCards() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   cards.forEach(card => {
//     const cardTop = card.getBoundingClientRect().top;
//     cardTop < triggerBottom
//       ? card.classList.add('show')
//       : card.classList.remove('show');
//   });
// }

export default function Card({ children, className, onClick }) {
  const classes = className ? `card-container ${className}` : 'card-container';
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
}
