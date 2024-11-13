import React from 'react';
import Articles from '../../components/articles/Articles';
const articlesExample = [
  {
    title: 'How to create a new account',
    content: 'To create a new account, click on the "Sign Up" button and follow the instructions.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'introduccion/tutorial-ejemplo'

  },

  {
    title: 'How to personalize your profile',
    content: 'To personalize your profile, click on your profile picture and select "Edit Profile".',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'guia-de-inicio/personalizar-perfil'
  },

  {
    title: 'How to start learning a new language',
    content: 'To start learning a new language, click on the "Start Learning" button and select the language you want to learn.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'guia-de-inicio/comenzar-aprendizaje'
  },

  {
    title: 'How to practice speaking',
    content: 'To practice speaking, click on the microphone icon and start speaking when prompted.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'guia-de-inicio/practic'
  },
  {
    title: 'How to practice writing',
    content: 'To practice writing, click on the text box and start typing when prompted.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'guia-de-inicio/practicar-escritura'
  },
  {
    title: 'How to practice writing',
    content: 'To practice writing, click on the text box and start typing when prompted.',
    image: 'https://img.freepik.com/fotos-premium/imagen-aleatoria_590832-8260.jpg',
    route: 'guia-de-inicio/practicar-escritura'
  }
]
const ArticlesExample = () => {
  return (
    <div>
      <h1 class="main-title">Artículos</h1>
      <Articles articles={articlesExample} />
      <button>Start Now</button>
    </div>
  );
};

export default ArticlesExample;