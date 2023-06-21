import imgHomeCinza from "../../public/imagens/homeCinza.svg";
import imgHomeAtivo from "../../public/imagens/homeAtivo.svg";
import imgPublicacaoAtivo from "../../public/imagens/publicacaoAtivo.svg";
import imgPublicacaoCinza from "../../public/imagens/publicacaoCinza.svg";
import imgUsuarioAtivo from "../../public/imagens/usuarioAtivo.svg";
import imgUsuarioCinza from "../../public/imagens/usuarioCinza.svg";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

const mapaDeRotas = {
    home: {
        imagemAtivo: imgHomeAtivo,
        rodasAtivacao: ['/'],
        imagemPadrao: imgHomeCinza
    },
    publicacao: {
        imagemAtivo: imgPublicacaoAtivo,
        rodasAtivacao: ['/publicacao'],
        imagemPadrao: imgPublicacaoCinza
    },
    perfil: {
        imagemAtivo: imgUsuarioAtivo,
        rodasAtivacao: ['/perfil/eu', '/perfil/eu/editar'],
        imagemPadrao: imgUsuarioCinza
    }
}


export default function Navegacao({className}) {
    const [rotaAtiva, setRotaAtiva] = useState('home');
    const router = useRouter();

    useEffect(() => {
        definirRotaAtiva();
    }, [router.asPath]);
    
    const definirRotaAtiva = () => {
        const chavesDoMapaDeRotas = Object.keys(mapaDeRotas);
        const indiceAtivo = chavesDoMapaDeRotas.findIndex(chave => {
            return mapaDeRotas[chave].rodasAtivacao.includes(
                window.location.pathname
            );
        });

        if(indiceAtivo === -1 ) {
            setRotaAtiva('home');
        }else {
            setRotaAtiva(chavesDoMapaDeRotas[indiceAtivo]);
        }
        console.log({chavesDoMapaDeRotas});

    }

    return (
        <nav className={`barraNavegacao ${className}`}>
            <ul>
                <li>
                    <Image 
                        src={imgHomeAtivo}
                        alt='icone home'
                        width={20}
                        height={20}
                    />
                </li>
                    
                <li>
                    <Image 
                        src={imgPublicacaoCinza}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>
               
                <li>
                    <Image 
                        src={imgUsuarioCinza}
                        alt='icone publicacao'
                        width={20}
                        height={20}
                    />
                </li>
            </ul>
        </nav>
    );
}