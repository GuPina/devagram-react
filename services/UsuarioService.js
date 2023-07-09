import DevagramApiService from "./DevagramApiService";

export default class UsuarioService extends DevagramApiService {
    async login(credenciais) {
        const { data } = await this.post('/login', credenciais);
        
        console.log('Token:', data.token);

        localStorage.setItem("usuario.nome", data.nome);
        localStorage.setItem("usuario.email", data.email);
        localStorage.setItem("usuario.token", data.token);

        const usuario = await this.get('/usuario');

        localStorage.setItem('usuario.id', usuario.data._id);

        if (usuario.data.avatar) {
            localStorage.setItem("usuario.avatar", usuario.data.avatar);
        }
    }

    async cadastro(dados) {
        return this.post('/cadastro', dados);
    }

    estaAutenticado() {
        return localStorage.getItem('usuario.token') !== null;
    }

    async pesquisar(termoDaPesquisa) {
        return this.get('/pesquisa?filtro=' + termoDaPesquisa)
    }

    async obterPerfil() {
        const idUsuario = localStorage.getItem('usuario.id');
        return this.get(`/usuario?id=${idUsuario}`);
    }    

    async alternarSeguir(idUsuario) {
        return this.put(`/usuario/seguir?id=${idUsuario}`);
    }
    
    async editarPerfil(dadosPerfil) {
        const idUsuario = localStorage.getItem('usuario.id');
        return await this.put(`/usuario/${idUsuario}`, dadosPerfil);
    }

    async logout() {
        localStorage.removeItem("usuario.nome");
        localStorage.removeItem("usuario.email");
        localStorage.removeItem("usuario.token");
        localStorage.removeItem("usuario.avatar");
        localStorage.removeItem("usuario.id");
    }

    

    obterInformacoesDoUsuarioLogado() {
        return {
            id: localStorage.getItem('usuario.id'),
            nome: localStorage.getItem('usuario.nome'),
            email: localStorage.getItem('usuario.email'),
            avatar: localStorage.getItem('usuario.avatar')
        };
    }
}
