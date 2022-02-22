export function peek()
    {
        if(this.last==-1)
        {
            console.log("empty");
        }
        else
        {
            console.log(`the topmost element is ${this.arr[this.last]}`);
        }
    }