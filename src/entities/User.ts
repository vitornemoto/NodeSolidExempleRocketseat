import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;


    // props vai pegar  todas as propiedades passadas pelo parâmetro, nesse caso vai omitir o id
    constructor(props: Omit<User,'id'>, id?: string){
        // faz o papel de pegar todos os parâmetros e adicionar as propriedades
        Object.assign(this, props);

        if(!id){
            this.id = uuid();
        }
    }
}