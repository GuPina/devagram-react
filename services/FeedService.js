import DevagramApiService from "./DevagramApiService";

export default class FeedService extends DevagramApiService {
    async carregarPostagens(idUsusario) {
        let url = '/feed';
        if(idUsusario) {
            url += `?id=${idUsusario}`;
        }

        return this.get('/feed')
    }

    async adicionarComentario(idPostagem, comentario) {
        return this.put(`/comentario?id=${idPostagem}`, {
            comentario
        });
    }

    async alterarCurtida(idPostagem) {
        return this.put(`/like?id=${idPostagem}`);
    }

    async fazerPublicacao (dadosPublicacao) {
        return this.post('/publicacao', dadosPublicacao);
    }
}