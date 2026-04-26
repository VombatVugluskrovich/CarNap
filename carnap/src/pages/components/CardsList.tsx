import ServiceCard from "./ServiceCard"
import chapters from '../../metadata/chapters.json'

const CardsList = () => {
    return(
        <div className='row row-cols-1 row-cols-md-4 g-4 container mx-auto gap-3' style={{
                    maxWidth: '800px', 
         width: '100%',
         marginBottom: '50px'
                }}>
                    {chapters.map((c: any) => (
                        <ServiceCard caption={c.description} imageUrl={'/images/ico' + c.id + '.png'} url={c.url} key={c.id}></ServiceCard>
                        ))}
                </div>
                
    )
}
export default CardsList