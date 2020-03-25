//MVC 5 metodos

const connection = require('../database/connection');

module.exports = {
    //Com paginacao
    async index(request, response){ 
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count(); //pode retornar array -  count[0]

        //console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        //const id = result[0];
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = resquest.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});    //https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};


//npm install cors     - modulo seguraca, vai determinar quem vai acessar nossa aplicacao