import { useEffect, useState } from "react";
import Postagem from "./Postagem";

export function Feed({ usuarioLogado }) {
    const [listaDePostagens, setListaDePostagens] = useState([]);
  
    useEffect(() => {
      console.log('carregar o feed');
      setListaDePostagens([
        {
          id: '1',
          usuario: {
            id: '1',
            nome: 'Gustavo',
            avatar: null
          },
          fotoDoPost: 'https://i.pinimg.com/564x/4c/38/71/4c387112a8b8d749c81422aabe5bf563.jpg',
          descricao: 'Ultimo heroi da terra',
          curtidas: [],
          comentarios: [
            {
              nome: 'Fulano',
              mensagem: 'Já foi assaltado? claro que não!'
            },
            {
                nome: 'Super Xandão',
                mensagem: 'Aqui é Xandão, sem pressão'
              }
          ]
        }
      ]);
    }, [usuarioLogado]);
  
    return (
      <div className="feedContainer">
        {listaDePostagens.map(dadosPostagem => (
          <Postagem key={dadosPostagem.id} {...dadosPostagem} />
        ))}
      </div>
    );
  }
  
  
  
  
  