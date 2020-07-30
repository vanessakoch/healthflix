import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const inicialData = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(inicialData);
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    })
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>
      <form onSubmit={function handleSubmit(e){
        e.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(inicialData);
      }}>
      
      <FormField 
        label="Nome da Categoria"
        type='text'
        name='nome'
        value={values.nome}
        onChange={handleChange}
      />

      <FormField 
        label="Descrição"
        type='textarea'
        name='descricao'
        value={values.descricao}
        onChange={handleChange}
      />

      <FormField 
        label="Cor"
        type='color'
        name='cor'
        value={values.cor}
        onChange={handleChange}
      />
      
      <button>
        Cadastrar
      </button>
    </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${indice}${categoria}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;