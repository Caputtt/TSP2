
/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */
import {TicketType} from "../../models/ticket/ticket";

export function getTicketById<T>(id): Promise<T[]> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: T[]) => {
            return data;
        });
}


// запрос на на отправку данных - пока не используется

export function postTicketData(postData): Promise<{success: boolean}> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: {success: boolean}) => {
            return data;
        });
}

