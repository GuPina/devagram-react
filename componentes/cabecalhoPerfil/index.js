import imgSetaEsquerda from '../../public/imagens/setaEsquerda.svg';
import Avatar from '../avatar';
import CabecalhoComAcoes from '../cabecalhoComAcoes';
import Botao from '../botao';

export default function CabecalhoPerfil({
    usuario
}) {
    return (
        <div className='cabecalhoPerfil largura30pctDesktop'>
            <CabecalhoComAcoes 
                iconeEsquerda={imgSetaEsquerda}
                titulo={usuario.nome}
            />

            <div className='statusPerfil'>
                <Avatar src={usuario.avatar} />
                <div className='informacoesPerfil'>
                    <div className='stausContainer'>
                        <div className='status'>
                            <strong>15</strong>
                            <span>Publicaçãoes</span>
                        </div>

                        <div className='status'>
                            <strong>120</strong>
                            <span>Seguidores</span>
                        </div>

                        <div className='status'>
                            <strong>135</strong>
                            <span>Seguindo</span>
                        </div>

                    </div>

                    <Botao 
                        texto={'Seugir'}
                        cor='primaria'
                    />
                </div>
            </div>
        </div>

    )
}