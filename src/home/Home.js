import React, { useEffect, useState }  from "react";
import Card from "../card/Card";
import './home.css'

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [cards, setCards] = useState(0)
    const [cardItems, setCardItems] = useState([])

   
    const setCardValues = () => {
        const items = Array.from({ length: 13 }, (_, i) => ({
            title: `Item ${i + 1}`,
        }));
        const chunkedItems = [];
        if (cards > 0) {
            for (let i = 0; i < items.length; i += cards ) {
                let temp = []
                for (let j = 0;j < cards; j += 1) {
                    temp.push(items[i + j])
                }
                    
                chunkedItems.push(temp)
            }
        }
        setCardItems(chunkedItems)
       //  console.log(chunkedItems)
    }
    const setCardCount = (val) => {
        if (val > 1000) {
            setCards(4)
        }
        else if (val > 700) {
            setCards(3)
        }
        else if (val > 450) {
            setCards(2)
        }
        else if (val < 450) {
            setCards(1)
        }
    }

    useEffect(() => {
        setCardCount(window.innerWidth);
        setCardValues()
        const handleResize = () => {
            setWidth(window.innerWidth);
            setCardCount(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

    }, []);
    useEffect(() => {
        setCardValues()
    }, [cards]);

    return (
        <div>
            {cardItems.length > 0 && cardItems.map((chunk, chunkIndex) => (
            <div className="card-container" key={chunkIndex}>
                {chunk.map((item, index) =>
                    item && <Card key={index} text={item.title} />
                )}
            </div>
            ))}
        </div>
    )
}

export default Home;


