import comAutorizacao from '../../../../hoc/comAutorizacao';
import Feed from '../../../../componentes/feed';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CabecalhoPerfil from '../../../../componentes/cabecalhoPerfil';

function Perfil({ usuarioLogado }) {
    const [usuario, setUsuario] = useState({});
    const router = useRouter();


    useEffect(() => {
        async () => {
        setUsuario({
            nome: 'Gustavo Pina'
        })};
        console.log('chegou aqui')
    }, [router.query.id]);

    return (
    <header>
       <div className='paginaPerfil'>
            <CabecalhoPerfil 
                usuarioLogado={usuarioLogado}
                usuario={usuario}
            /> 
            <Feed usuarioLogado={usuarioLogado} />
       </div>
    </header>
    );
}

export default comAutorizacao(Perfil)