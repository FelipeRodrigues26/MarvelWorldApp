export interface Personagem {
    id: number;
    name: string;
    description:string;
    path: String;
    events:[]
    thumbnail:{
        path:string,
        extension:string
    }
}
