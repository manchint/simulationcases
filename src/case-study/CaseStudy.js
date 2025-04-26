import React, { useRef } from "react";
import './CaseStudy.css'
import { saveAs } from "file-saver";
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel
} from "docx";

const CaseStudy = ({details}) => {
    const contentRef = useRef();
    const exceptList = ['Case Study No', 'Sno', 'Category', 'Name']
    const includeList = ['Patient Profile',	'Present Complaint','Vital Signs',
                        'History of Present Illness', 'Past Medical History', 'Medications',
                        'Allergies', 	'Family History', 	'Social History','Physical Exam',
                        'Laboratory & Diagnostic Results',	'Symptom Evolution', 
                        'Clinical Reasoning Challenges for Learners',	
                        'Expected Learner Actions',	'Critical Actions Checklist', 	
                        'Interprofessional Collaboration Opportunities',
                        'Discussion Prompts for Learners	Debriefing Prompts','Adaptability Notes',
                        'Simulation Format Suggestions', 'Teaching pearls']

    const downloadDoc = async () => {
        const lines = contentRef.current.innerText.split("\n");

        const paragraphs = lines.map((line, index) => {
        // Detect headings or normal paragraphs
        if (line.startsWith("##")) {
            return new Paragraph({
            text: line.replace("##", "").trim(),
            heading: HeadingLevel.HEADING_2,
            });
        } else if (line.startsWith("#")) {
            return new Paragraph({
            text: line.replace("#", "").trim(),
            heading: HeadingLevel.HEADING_1,
            });
        } else {
            return new Paragraph(line.trim());
        }
        });

        const doc = new Document({
        sections: [
            {
            properties: {},
            children: paragraphs,
            },
        ],
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob, "component.docx");

    }
    return (
        <div className="case-study-container">
            <div className="case-study-header-container">
                <p className='case-study-name'>{details['Name']}</p>
                <button className="downlaod-btn" onClick={downloadDoc}>Download as Document</button>
            </div>
            <div ref={contentRef}>
                {Object.keys(details).length > 0 &&
                    includeList
                    .filter((col) => !exceptList.includes(col))
                    .map((col, index) => {
                        return (
                        details[col] && (
                            <div key={index}>
                            <h2>{col}</h2>
                            {details[col].split('\n').length > 1 ? ( 
                                <ul>
                                    {details[col].split('\n').map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                                ) : 
                                (<p> {details[col]} </p>)}
                            </div>
                        )
                        );
                    })}
            </div>
        </div>
    )

}

export default CaseStudy