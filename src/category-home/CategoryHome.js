import React, { useEffect, useState }  from "react";
import * as XLSX from 'xlsx';
import CaseStudy from "../case-study/CaseStudy";
import CaseStudySP from "../case-study-sp/CaseStudySP";
import './CategoryHome.css'
import { useLocation, useNavigate } from "react-router-dom";


const CategoryHome = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { category } = location.state || '';
    const [caseStudiesList, setCaseStudiesList] = useState([])
    const [caseStudyByCategory, setCaseStudyByCategory] = useState([])
    const [selectedID, setSelectedID] = useState(0)
    const [selectedData, setSelectedData] = useState({})


    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data.xlsx`)
            .then(res => res.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: 'array' });
                const sheet = workbook.Sheets[category];
                const jsonData = XLSX.utils.sheet_to_json(sheet);
                var temp = []
                var caseStudiesList = []
                jsonData.forEach((item) => {
                    temp = [...temp, item]
                    caseStudiesList = [...caseStudiesList, item['Sno']]
                })
                setCaseStudyByCategory(temp);
                setCaseStudiesList(caseStudiesList);
                
            })
    }, []);

    useEffect(() => {
        if (caseStudyByCategory.length > 0) {
            setSelectedID(caseStudyByCategory[0]['Sno'])
        }
    }, [caseStudyByCategory])

    useEffect(() => {
        caseStudyByCategory.forEach((item) => {
            if (item['Sno'] == selectedID) {
                setSelectedData(item)
            }
        })
    }, [selectedID])


    const goToHome = () => {
        navigate('/simulationcases/')
    }

    return (
        <div className="container">
            <nav className="nav">
                <span onClick={goToHome} className="back-arrow">
                    ←
                </span>
                <h2 className="logo">{category}</h2>
                <ul className="navItems">
                    {caseStudiesList.map((sno, index) => (

                        <li
                            key={sno}
                            className={sno === selectedID ? "active" : ""}
                            onClick={() => setSelectedID(sno)}
                            >
                            Case Study {index + 1}
                        </li>

                    ))}
                </ul>
            </nav>
            <div className="content">
                {category == 'sp' ? (
                    <CaseStudySP details={selectedData} />
                ) :
                (
                    <CaseStudy details={selectedData} />
                ) }
                
            </div>
           

        </div>
    
    );
}

export default CategoryHome;