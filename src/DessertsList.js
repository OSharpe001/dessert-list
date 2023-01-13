function DessertsList(props) {
    console.log(props)
    const listItems = props.data.map(dessert => {
        const itemText = `${dessert.name} - ${dessert.calories} cal`;
        if (dessert.calories<500) {
            return <li key={itemText}>{itemText}</li>
        } else {
            return null
        }})
    return <ul>
        {listItems}
    </ul>
  }
  
  export default DessertsList;
  