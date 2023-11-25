
// eslint-disable-next-line react/prop-types
function Tile({tileTitle, tileImage, children}) {
    return (
        <section>
            {tileTitle ? (<div><h2>{tileTitle}</h2>{children}</div>)
                : (<div><img src={tileImage} alt="image"/></div>)}
        </section>
    )
}

export default Tile;
