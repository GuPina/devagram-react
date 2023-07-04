import { useEffect, useState } from "react";
import Postagem from "./Postagem";
import FeedService from "../../services/FeedService";

const feedService = new FeedService();

export default function Feed({ usuarioLogado, idUsuario }) {
  const [listaDePostagens, setListaDePostagens] = useState([]);

  const carregarDados = async () => {
    setListaDePostagens([]);

    const { data } = await feedService.carregarPostagens(idUsuario);

    if (data.length > 0) {
      const postagensFormatadas = data.map((postagem) => {
        const comentarios = Array.isArray(postagem.comentario)
          ? postagem.comentario.map((c) => ({
              nome: c.nome,
              mensagem: c.comentario,
            }))
          : [];

        return {
          id: postagem._id,
          usuario: {
            id: postagem.userId,
            nome: postagem?.usuario?.nome,
            avatar: postagem?.usuario?.avatar,
          },
          fotoDoPost: postagem.foto,
          descricao: postagem.descricao,
          curtidas: postagem.likes,
          comentarios: comentarios,
        };
      });

      setListaDePostagens(postagensFormatadas);
    } else {
      setListaDePostagens([]);
    }
  };

  useEffect(() => {
    carregarDados();
  }, [usuarioLogado, idUsuario]);

  if (!listaDePostagens.length) {
    return null;
  }

  return (
    <div className="feedContainer largura30pctDesktop">
      {listaDePostagens.map((dadosPostagem) => (
        <Postagem
          key={dadosPostagem.id}
          {...dadosPostagem}
          usuarioLogado={usuarioLogado}
        />
      ))}
    </div>
  );
}
