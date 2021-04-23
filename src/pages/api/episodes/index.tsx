import { episodes } from "../../../../server"

export default async function handler(request, response) {

   if (episodes) {
      response.status(200).json(episodes)
   } else {
      response
         .status(404)
         .json({ message: `episodios nao encontrados` })

   }
}