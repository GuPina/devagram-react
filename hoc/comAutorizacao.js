import { useRouter } from "next/router";
import UsuarioService from "../services/UsuarioService"
import Header from "../componentes/layout/Header";
import Rodape from "../componentes/layout/Rodape";

const usuarioService = new UsuarioService();

export default function comAutorizacao(Componente) {
    return (props) => {
        const router = useRouter();

        if (typeof window !== 'undefined') {
            if (!usuarioService.estaAutenticado()) {
                router.replace('/cadastro');
                return null;
            }

            const usuarioLogado = usuarioService.obterInformacoesDoUsuarioLogado();

            return (
                <>
                    
                    <Header usuarioLogado={usuarioLogado} />
                    <Componente usuarioLogado={usuarioLogado} {...props} />
                    <Rodape usuarioLogado={usuarioLogado} />
                </>
            ) 
        }

        return null;

    }
}