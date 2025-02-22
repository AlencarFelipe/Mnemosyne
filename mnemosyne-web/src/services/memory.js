const API_URL = "http://localhost:3000";

const getMemories = async () => {

   const response = await fetch(`${API_URL}/memories`);//busquei os dados
    
   const memories = await response.json();// Converte a requisição para JSON

   return memories;

}

export default {getMemories};