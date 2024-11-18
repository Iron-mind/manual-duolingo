import React from 'react';
import Articles from '../../components/articles/Articles';
import { articulosInterfaz } from '../Interfaz/InterfazArticulos';
import { guiaDeInicio } from '../guiaInicio/GuiaDeInicio';
import { recompensasYVidasArticles } from '../RecompensasYVidas';

const articlesExample = [
  ...guiaDeInicio,
  ...articulosInterfaz,
  ...recompensasYVidasArticles
]
const ArticlesExample = () => {
  return (
    <div>
      <h1 class="main-title">Artículos</h1>
      <Articles articles={articlesExample} />
    </div>
  );
};

export default ArticlesExample;