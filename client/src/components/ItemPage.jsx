import ItemList from "./ItemList.jsx"


export default function ItemPage({items}) { 

    return (
        <main className='itemlist'>
            <ItemList items={items} />
        </main>
    )
}