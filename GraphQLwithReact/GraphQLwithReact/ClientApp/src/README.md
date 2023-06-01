# React

React is a free and open-source front-end JavaScript library for building user interfaces based on components.  <br/><br/>
In react we have 2 types of **components**:
1. **class** components - extends Component, has render method
``` 
export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
       </div>
       );
     }

 ``` 
2. **function** components - is a classic JS function
 ``` 
 export function MediBtn() {
    return (
        <div>
        <button >Medi btn here</button>
        </div>
        )
}
  ```   
  or somewhere you will see like this    
   ``` 
 export const MediBtn = () => {
...
}
  ```  
  If it's only component in js file, you need to add **default**:     
  ``` export default function   ```   
  We will use function components, because: "Class components are still supported by React, but we don't recommend using them in new code.".   
  The visual studio in new project use class components, so will leave few of them, just for examples.   
  React component names must always start with a capital letter, while HTML tags must be lowercase.   <br/><br/> 
  What you have in return statement is called **JSX**. Your component can’t return multiple JSX tags. You have to wrap them into a **shared parent**,   
  like a 
  ```  
  <div>...</div> or an empty <>...</>
  ```    
  
