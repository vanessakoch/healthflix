import React from 'react';
import PageDefault from '../../components/PageDefault';
import './style.css';

function Page404() {
  return (
    <PageDefault>
      <h3 className="Title404">
        Olhamos por tudo mas infelizmente não encontramos essa página :(
        <br />
        Que tal se divertir um pouco?
      </h3>
      <iframe className="Game" title="hipsta" src="https://laughing-jang-8b58e3.netlify.app/" />
    </PageDefault>
  );
}

export default Page404;
