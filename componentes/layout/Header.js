import Image from "next/image"
import logoHorizontal from "../../public/imagens/logoHorizontal.svg"
import imagemLupa from "../../public/imagens/lupa.svg"
import Navegacao from "./Navegacao"

export default function Header() {
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
                    placeholder='pesquisar'
                    value={''}
                    onChange={() => console.log ('pesquisando')}
                />   
                </div>

                <Navegacao className='desktop' />
            </div>


        </header>
    )
}