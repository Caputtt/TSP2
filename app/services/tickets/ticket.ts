import {TicketType} from "../../models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {postTicketData} from "@rest/tickets";

let ticketPostInstance;

export function initTicketInfo(ticket: TicketType): void {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;}

    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];

    let ticketElemTemplate;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData(): string[] {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj:string[];
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

export function initPostData(data: TicketType): void {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}