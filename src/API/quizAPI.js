import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://thawing-brushlands-67997.herokuapp.com/",
});

export const quizAPI = {
    postResult: async (body) => {
        console.log ( "Запрос отправлен: ", body)
        const response = await instance.post("api-game/result-game", body)
        return response
    }
}


