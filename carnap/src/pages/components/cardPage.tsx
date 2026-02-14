import { useEffect } from 'react';
import CardPageContent from '../../metadata/chapters.json'


const CardPage = (props: { id: any }) => {
    let description = '', image = '', list: string[] = [];
    CardPageContent.map((c: any) => {
        if (c.url == props.id) {
            description = c.text;
            image = c.cardPageImage;
            list = c.cardPageList
        }
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-100 container" style={{
            padding: '10px',
        }}>
            <div className="p-3 mb-2 bg-light border rounded align-items-center d-flex flex-column flex-md-row justify-content-between"
                style={{
                    minHeight: '500px'
                }}
            >

                <img src={image} style={{
                    maxWidth: '80%',
                    maxHeight: '500px'
                }}></img>
                <p style={{
                    fontSize: '1.3rem',
                    paddingLeft: '12px',

                }}>{description}</p>

            </div >
            <h3 style={{
                visibility: list.length > 2 ? 'visible' : 'hidden'
            }}>Типи робіт</h3>
            <ul style={{
                fontSize: '1.3rem',
                marginLeft: '25px',
                paddingBlock: '15px',

            }}>

                {list?.map((c: any) => (
                    <li>{c}</li>
                ))}
            </ul>
        </div>
    )

}
export default CardPage