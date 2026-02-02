const CardPage = (props: { description: any; image: any ; list: any}) => {
    const {
        description,
        image,
        list,

    } = props
    return(
        <div style={{
            width: '100%',
            height: '300%',
            position: 'relative',
            zIndex: 999
            
        }} className="p-3 mb-2 bg-light border rounded align-items-center justify-content-between"
        >
            <p>{description}</p>
            <img src={image}></img>
        </div>
    )
    
} 
export default CardPage