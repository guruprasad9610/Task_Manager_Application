export class Todo
{
    static reset() {
      throw new Error('Method not implemented.')
    }
    title: string
    desc: string
    active: boolean
    
    constructor(title: string,desc: string,active: boolean)
    {

        this.title = title
        this.desc = desc
        this.active = active
    }
    
}