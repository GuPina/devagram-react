import Image from "next/image"
import logoHorizontal from "../../public/imagens/logoHorizontal.svg"
import imagemLupa from "../../public/imagens/lupa.svg"
import Navegacao from "./Navegacao"
import { useState } from "react"
import ResultadoPesquisa from "./ResultadoPesquisa"

export default function Header() {
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [termoPesquisado, setTermoPesquisado] = useState([]);

    const aoPesquisar = (e) => {
      setTermoPesquisado(e.target.value);
      setResultadoPesquisa([]);
      
       
        if (termoPesquisado.length < 3) {
            return;
        }
        {
        setResultadoPesquisa([ 
            {
                avatar: '',
                nome: 'Gustavo',
                email: 'gustavo@devagram.com',
                _id: '12345'
            },
            {
                avatar: '',
                nome: 'adastoufo',
                email: 'adastoufo@devagram.com',
                _id: '123456'
            },
            {
                avatar: '',
                nome: 'astoufinho',
                email: 'astoufinho@devagram.com',
                _id: '1234567'
            }
        ])

    }

    }


    const aoClicarResultadoPesquisa = (id) => {
        console.log('aoClicarResultadoPesquisa', {id});

    }

    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image 
                        src={logoHorizontal}
                        alt='logo devagram'
                        layout='fill'
                    />
                </div>

                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image 
                            src={imagemLupa}
                            alt='Icone lupa'
                            layout='fill'
                        />
                </div>

                <input
                    type='text'
                    placeholder='Pesquisar'
                    value={termoPesquisado}
                    onChange={aoPesquisar}
                />   
                </div>

                <Navegacao className='desktop' />
            </div>
            {resultadoPesquisa.length > 0 && (
                <div className='resultadoPesquisaContainer'>
                    {resultadoPesquisa.map(r => (
                        <ResultadoPesquisa 
                            avatar={r.avatar}
                            name={r.nome}
                            email={r.email}
                            key={r._id}
                            id={r._id}
                            onClick={aoClicarResultadoPesquisa}
                        />
                    ))}
                </div>
            )}
        </header>
    );
}