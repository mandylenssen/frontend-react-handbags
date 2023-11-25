import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";


function App() {
    return (<>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonText="to the collection" disabled={false}/>
                <Button buttonText="shop all bags" disabled={false}/>
                <Button buttonText="pre-orders" disabled={true}/>
            </nav>

            <main>
                <Product
                    redLabel="Best seller"
                    productImage="src/assets/bag_1.png"
                    productTitle="The handy bag"
                    productPrice={400}
                />
                <Product
                    redLabel="Best seller"
                    productImage="src/assets/bag_2.png"
                    productTitle="The stylish bag"
                    productPrice={250}
                />
                <Product
                    redLabel="New collection"
                    productImage="src/assets/bag_3.png"
                    productTitle="The simple bag"
                    productPrice={300}
                />
                <Product
                    redLabel="New collection"
                    productImage="src/assets/bag_4.png"
                    productTitle="The trendy bag"
                    productPrice={150}
                />
            </main>


            <footer>
                <Tile tileTitle="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi
                        exercitationem</p>
                        <p>illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                            laboriosam nisi.</p>
                    </Tile>
                <Tile
                    tileImage="src/assets/brand.png"
                />

                <Tile
                    tileImage="src/assets/our_story.png"
                />

                <Tile tileTitle="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi
                    exercitationem</p>
                    <p>illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                    laboriosam nisi.</p>
                    </Tile>
            </footer>
        </>
    )
}

export default App
