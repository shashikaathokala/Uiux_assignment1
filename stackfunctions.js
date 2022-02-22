export function push(item) {
    if (this.last == this.tol_size - 1) {
        console.log("stack is full (stack overflow )");
    }
    else 
    {
        this.last += 1;
        this.arr[this.last] = item;
        console.log(`item pushed is${item}`)
        return this.last;
    }
}

export function pop()
    {
        if(this.last==-1)
        {
            console.log("empty");
        }
        else
        
        {
            console.log(`popped element is ${this.arr[this.last]}`);
        }
    }

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
