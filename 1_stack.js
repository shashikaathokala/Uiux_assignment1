import { push } from "./push.js";
import { pop } from "./pop.js";
import { peek } from "./peek";

class  Stack
{
    last;
    arr;
    tol_size;

    constructor(tol_size)
    {
        this.last = -1;
        this.arr=[];
        this.tol_size = tol_size;
    }
    push();
    pop();
    peek();
    
}


let stack1 = new Stack(2);

stack1.push(1);
stack1.push(2);
stack1.pop();
stack1.peek();