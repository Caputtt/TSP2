// создать в разделе models интерфейс для класса и  применить реализацию к этому классу
export function  openModal(id=null):void{
    const template = '<div>MyModal</div>';
    const modal = new Modal(id);
    modal.open(template);
}
export function removeModal():void{
    Modal.removeById();
}
export function removeAllModal():void{
    Modal.removeAll();
}
export function openModalSecond(id=null) {
    const template = '<div>MyModal 2</div>';
    const modal = new Modal(id);
    modal.open(template);
}

export class Modal {
    private readonly id: string;
    private static modals: Modal[] = [];

    constructor(id: string = null) {
        const findModal = Modal.modals.find ((el) => {
            return el.id === id;
            }
        )
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        this.id = id || (Math.random() + Modal.modals.length).toString();
    }
     public open(template: string): void {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal-element');
        divWrap.addEventListener('click', this.closeModalHandler);
        document.body.appendChild(divWrap);
    }
    public remove(): void{
        const el = document.getElementById(this.id) as HTMLElement;
        if (el) {
            el.removeEventListener('click', this.closeModalHandler);
            el.parentNode.removeChild(el);
        }
    };
    public static removeById(id: string=null):void {
        let modalId = id;
        const findEl: Modal = Modal.modals.find((el) => {
            return el.id === modalId;
        })
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => {
                return el.id !== modalId;
            })
        } else {
            if (Array.isArray(Modal.modals)) {
                const lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    }
    private closeModalHandler = (ev: Event) => {
        const target = ev.target as HTMLElement;
        if (target.classList.contains('close-modal')) {
            this.remove();
        }
    }

    public static removeAll(){
    if (Array.isArray(Modal.modals)){
        Modal.modals.forEach((el)=>{
            Modal.removeById(el.id);
        })
    }
}
}