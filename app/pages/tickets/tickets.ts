import {getTicketById, postTicketData} from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss'
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {IVipTicket, TicketType, ITicket} from "../../models/ticket/ticket";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import { initTicketInfo, registerConfirmButton } from "@services/tickets/ticket";


let ticketInstance: TicketType ;

const clientType = "custom";



// init main  data
initApp();
registerConfirmButton();



function initApp(): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/
//
// function initTicketInfo(ticket: TicketType): void {
//     const targetElement = document.querySelector('.ticket-info');
//
//     const ticketDescription = ticket?.description;
//     const ticketOperator = ticket?.tourOperator;
//     let vipClientType;
//     if ("vipStatus" in ticket) {
//         vipClientType = ticket.vipStatus;}
//
//     const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
//
//     let ticketElemTemplate;
//
//     ticketElemsArr.forEach((el, i) => {
//         ticketElemTemplate+= initTicketElementTemplate(el, i);
//     });
//
//     targetElement.innerHTML = ticketElemTemplate;
//
// }
//
// function initUserData(): string[] {
// const userInfo = document.querySelectorAll('.user-info > p');
// let userInfoObj:string[];
//     userInfo.forEach((el) => {
//     const inputDataName = el.getAttribute('data-name');
//     if (inputDataName) {
//         const inputElems = el.querySelector('input');
//         userInfoObj[inputDataName] = inputElems.value;
//     }
//     });
//
//     console.log('userInfoObj',userInfoObj)
//     return userInfoObj;
// }
//
// function initPostData(data: TicketType): void {
//     initUserData();
//     postTicketData(data).then((data) => {
//         if (data.success) {
//
//         }
//     })
// }
//
// function registerConfirmButton(): void {
//     const targetEl = document.getElementById('accept-order-button');
//     if (targetEl) {
//         targetEl.addEventListener('click', () => {
//             initPostData(ticketPostInstance);
//         });
//     }
// }


