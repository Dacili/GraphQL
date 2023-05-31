import './mediCard.css'

export default function MediCard(props) {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];
    let listItems = products.map(x => 
        <li key={x.id} >{x.title}</li>
    )
    let content;
    if (true) {
        content = <div className="font-weight-500" style={{ border: "1pt solid red" }}>{props.txt}</div>
    }
    else content = <div></div>
    return (
        <>
            {content}
            <ul>{listItems}</ul>
        </>

    )
}