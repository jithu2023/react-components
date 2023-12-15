
export function Body(prop) {
    let imageData = prop.image;
    return (
        <div>
            {
                imageData.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    )
}