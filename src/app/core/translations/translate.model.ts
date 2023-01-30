interface TranslateInterface {
    id: string,
    src: string;
  }
  
  export class Translate implements TranslateInterface {
    public id: string;
    public src: string;
    constructor({ id, src }: TranslateInterface) {
      this.id = id;
      this.src = src;
    }
  }
  