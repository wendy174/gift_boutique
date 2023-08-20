// single card 
import ItemCard from "./ItemCard.jsx"
import Grid from '@mui/material/Grid';
import "./ItemList.css"


export default function ItemList({items}) { 


    return (
        <div className='itemcard'>
            <Grid container spacing={3}>
                {items.map(item => (
                    <Grid item xs={12} sm={6} md={4} key={item.key}>
                        <ItemCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}