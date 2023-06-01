# React  
<img src="https://github.com/Dacili/GraphQL/assets/37112852/58fcd616-7ded-4fda-a6ed-f691e8c38030"  width="250" height="90">  

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
   
   *Notice that if we are calling function without parameters, we are not adding ()*   
   If we want to respond to click event but with some parameter, we need to add lambda function:  
      ```
      <button onClick={() => handleClick('some text or object')}>
        ```
   #### Hooks
   Functions starting with *use* are called Hooks. You can also write your own Hooks by combining the existing ones.
   ##### Add state to your component
   If you want your component to “remember” some information and display it, you need state.  
   **useState** is hook which declares a state variable that you can update directly  
   ``` 
   import React, { Component, useState } from 'react';
   ```    
   
   <img src="https://github.com/Dacili/GraphQL/assets/37112852/6c628aa4-810a-4949-b75a-f4bd488fa9f0"  width="300" height="300">  
   
#### Sharing data between components   
**Parent to child**   
Parent:
 ```
 return (
        <>
            <MediBtn rename={renameTitle} mediTxt="this is my first card"></MediBtn>
        </>
        )
```   
   
Child MediBtn: there are 2 ways of using data from the parent:  
- 1st way - you use exact names that were send with props inside {}:  
```
 export function MediBtn({ rename, mediTxt }) {
    return (
        <div>
            <p>{mediTxt}</p>
            <button onClick={() => rename('novo ime')}>rename app title</button>
        </div>
            )
```   
- 2nd way - you get all props, as object, and then we're accessing them like *props.rename*:
```
 export function MediBtn(propsMedi) {
    return (
        <div>
            <p>{propsMedi.mediTxt}</p>
            <button onClick={() => propsMedi.rename('novo ime')}>rename app title</button>
        </div>
        )
```  
**Child to parent** - take a look at previous code, *rename* props - it's actually an example of child to parent:   
In parent *renameTitle* function is implemented like this:   
```   
 let [displayName, setDisplayName]=useState( 'Prvo ime');
   
   function renameTitle(newName) {
        setDisplayName(newName)
   }
 ```     
 
 #### "Lifting state up”
 If you want a few children to share some state (variable...), move state in the parent, and then inject it to that children (parent to child).
 By moving state up, you’ve shared it between components.
 
    
 #### Lifecycle of component
 <img src="https://github.com/Dacili/GraphQL/assets/37112852/147ebfb3-14c7-4a9d-a0a7-d8ac1aa5698a"  width="600" height="300">  
 
 #### Comparison/Similarities with Angular
|  | React  | Angular |
| -------------| ------------- | ------------- |
|binding CSS classes| className  | class  |
|binding style|  style={{ border: "1pt solid red" }} |style="border: 1pt solid red"  |
|UI| JSX  | HTML file  |
|click event without params|  onClick={handleClick}  |  (click)="handleClick()"   |
|click event w params|   onClick={() => handleClick('some text or object')  | (click)="handleClick('some text')"   |
|binding variables to UI|   ```<h3>ime usera {user.name}</h3>  ``` |  ```<h3>ime usera {{user.name}}</h3> ```   |
| variable creation and init| let [displayName, setDisplayName]=useState( 'Prvo ime');  | displayName='Prvo ime'  |
|updating variable|   setDisplayName(newName)  | this.displayName=newName;  |
|parent to child (in parent)|  ```<MediBtn mediTxt="this is my first card"></MediBtn>  ``` | ``` <MediBtn [mediTxt]="this is my first card"></MediBtn>  ``` |
|parent to child (in child)| ```export function MediBtn(propsMedi)```or ```export function MediBtn({ mediTxt }) ``` |```  @Input() mediTxt;```  |
|child to parent (in parent)|```  <MediBtn rename={renameTitle}></MediBtn> ``` |``` <MediBtn (rename)="renameTitle($event)"></MediBtn> ``` |
|child to parent (in child)|```<button onClick={() => propsMedi.rename('novo ime')}>rename app title</button>``` |``` @Output() rename = new EventEmitter<string>(); this.rename.next('novo ime')  ```|
|lifecycle of component|   mounting -> updating -> unmounting  | ngOnChanges -> ngOnInit -> ngDoCheck (ex. ngAfterViewInit) -> ngOnDestroy  |
