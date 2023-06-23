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
          descricao: 'Ultimo heroi da terra no final dos tempos sempre haverá xandão vamos juntos lado a lado sempre naquela pegada dos campeões',
          curtidas: [],
          comentarios: [
            {
              nome: 'Fulano',
              mensagem: 'Aqui é Xandão, sem pressão, pra cima dos glob glob naquele pique irmao sempre lado a lado com o criador até o final dos tempos e pode esperar que no topo da montanha terá Xandão'
            },
            {
                nome: 'Super Xandão',
                mensagem: 'Aqui é Xandão, sem pressão, pra cima dos glob glob naquele pique irmao sempre lado a lado com o criador até o final dos tempos e pode esperar que no topo da montanha terá Xandão'
              }
          ]
        }
      ]);
    }, [usuarioLogado]);
  
    return (
      <div className="feedContainer largura30pctDesktop" >
        {listaDePostagens.map(dadosPostagem => (
          <Postagem 
            key={dadosPostagem.id} 
            {...dadosPostagem}
            usuarioLogado={usuarioLogado}           
          />
        ))}
      </div>
    );
  }