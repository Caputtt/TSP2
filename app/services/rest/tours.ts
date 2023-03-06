// запрос на получение списка туров - Определить типы (возвращающие и для параметров)
import {ITours} from "../../models/tours";

export function getTours(): Promise<ITours[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/')
        .then((response) => response.json())
        .catch((err)=>{
            console.log(err);
            return [];
        });
}


