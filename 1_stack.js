import { push,pop,peek } from "./stackfunctions.js";

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
    push()
    pop()
    peek()
    
}


let stack1 = new Stack(2);

stack1.push(1);
stack1.push(2);
stack1.pop();
stack1.peek();

// class  Stack
// {
//     last;
//     arr;
//     tol_size;

//     constructor(tol_size)
//     {
//         this.last = -1;
//         this.arr=[];
//         this.tol_size = tol_size;
//     }
//     push(item)
//     {
//         if(this.last==this.tol_size-1)
//         {
//             console.log("stack is full (stack overflow )");
//         }
//         else
//         {
//             this.last += 1;
//             this.arr[this.last] =item;
//             console.log(`item pushed is ${item}`)
//             return this.last;
//         }
//     }
//     pop()
//     {
//         if(this.last==-1)
//         {
//             console.log("stack is empty(underflow)");
//         }
//         else
//         {
//             console.log(`popped element is ${this.arr[this.last]}`);
//             this.last-=1;
//             return this.last;
//         }
//     }
//     peek()
//     {
//         if(this.last==-1)
//         {
//             console.log("empty stack ");
//         }
//         else
//         {
//             console.log(`the topmost element is ${this.arr[this.last]}`);
//         }
//     }
// }


// let stack1 = new Stack(2);

// stack1.push(1);
// stack1.push(2);
// stack1.push(6);
// stack1.pop();

// stack1.peek();