import React, { useEffect, useState }  from "react";
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import './caseStudiesList.css'
import Header from "../header/Header";

const CaseStudiesList = () => {
    const navigate = useNavigate();

    const [width, setWidth] = useState(window.innerWidth);
    const [cards, setCards] = useState(0)
    const [columnData, setColumnData] = useState([])
    const [cardItems, setCardItems] = useState([])

   
    const setCardValues = () => {
        const chunkedItems = [];
        if (cards > 0) {
            for (let i = 0; i < columnData.length; i += cards ) {
                let temp = []
                for (let j = 0;j < cards; j += 1) {
                    temp.push(columnData[i + j])
                }
                    
                chunkedItems.push(temp)
            }
        }
        setCardItems(chunkedItems)
       //  console.log(chunkedItems)
    }
    const setCardCount = (val) => {
        if (val > 1500) {
            setCards(6)
        }
        else if (val > 1000) {
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

    const goToCategory = (category) => {
        navigate('/simulationcases/category', { state: { category: category} })
    }
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data.xlsx`)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: 'array' });
                // const sheet = workbook.Sheets[workbook.SheetNames[0]];
                
                const names = Object.keys(workbook.Sheets)
                setColumnData([...new Set(names)]);
            })
    }, []);
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
    }, [cards, columnData]);

    return (
        <>
            <Header val='CaseScenarios'/>
            {cardItems.length > 0 && cardItems.map((chunk, chunkIndex) => (
            <div className="card-container" key={chunkIndex}>
                {chunk.map((item, index) =>
                    item && <Card key={index} text={item} click = {goToCategory}/>
                )}
            </div>
            ))}
            <Footer />
        </>
    )
}

export default CaseStudiesList;


