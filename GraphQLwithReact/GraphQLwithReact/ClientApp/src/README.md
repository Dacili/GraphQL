# React
### More detailed info from official documentation on https://react.dev/learn   
React is a free and open-source front-end JavaScript library for building user interfaces based on components.  <br/><br/>
#### Components
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
  
  #### JSX
  What you have in return statement is called **JSX**. Your component can’t return multiple JSX tags. You have to wrap them into a **shared parent**,   
  like a 
  ```  
  <div>...</div> or an empty <>...</>
  ```    
  #### CSS
  Adding **css classes** to the elements, or **style**:  
  ```
  import './mediCard.css'
  ...
   <div className="font-weight-500" style={{ border: "1pt solid red" }}>{props.txt}</div>
   ```
   
   #### Handling events  
   If we want to bind some variables, or function to the JSX, we omit them with curly braces {}, like here:  
   <img src="https://github.com/Dacili/GraphQL/assets/37112852/3efd5063-a484-4d11-9e72-8f035ffa1a51"  width="250" height="250">  
   If we want to respond to click event but with some parameter, we need to add lambda function:  
      ```
      <button onClick={() => handleClick('some text or object')}>
        ```
   

