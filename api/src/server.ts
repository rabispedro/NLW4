import express, { request, response } from 'express';

const app = express();

/*	MÉTODOS HTTP
*	GET => Busca
*	POST => Salvar
*	PUT => Alterar
*	DELETE => Deletar
*	PATCH => Alteração específica
*/

//	http://localhost:3333/
//	Rota, Recebidos, Enviados
app.get("/", (request, response) =>{
		return response.json({message:"Hello World - NLW4"});
	}
);


//	1 parametro => Rota (Recurso API)
//	2 parametro => (Request, Response)
app.post("/", (request, response) => {
		//	Recebeu os dados para salvar
		return response.json({message: "Os dados foram salvos com sucesso!"});
	}
);

app.listen(3333, () => console.log("Server is running!"));