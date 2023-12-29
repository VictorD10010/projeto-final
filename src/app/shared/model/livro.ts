export class Livro {

    id: number; 
    titulo: string; 
    autor: string; 
    descricao: string; 
    exemplares: string;


    constructor(id: number, titulo: string, autor: string, descricao: string, exemplares: string) {
        this.id=id;
        this.titulo=titulo;
        this.autor=autor;
        this.descricao=descricao;
        this.exemplares=exemplares;
    }


    public getId(): number{
        return this.id;
    }
    public getTitulo(): string{
        return this.titulo;
    }
    public getAutor(): string{
        return this.autor;
    }
    public getDescricao(): string{
        return this.descricao;
    }
    public getExemplares(): string{
        return this.exemplares;
    }

    public setId(id: number){
        this.id=id;
    }

    public setTitulo(titulo: string){
        this.titulo=titulo;
    }

    public setAutor(autor: string){
        this.autor=autor;
    }

    public setDescricao(descricao: string){
        this.descricao=descricao;
    }

    public setExemplares(exemplares: string){
        this.exemplares=exemplares;
    }



}