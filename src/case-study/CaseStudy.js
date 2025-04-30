import React, { useRef } from "react";
import './caseStudy.css'
import { saveAs } from "file-saver";
import {
    Document,
    Packer,
    Paragraph,
    HeadingLevel
} from "docx";

const CaseStudy = ({details}) => {
    const contentRef = useRef();
    const exceptList = ['Sno', 'Name']
    const includeList = ['Patient Profile',	'Present Complaint','Vital Signs',
                        'History of Present Illness', 'Past Medical History', 'Medications',
                        'Allergies', 	'Family History', 	'Social History','Physical Exam',
                        'Laboratory & Diagnostic Results',	'Symptom Evolution', 
                        'Clinical Reasoning Challenges for Learners',	
                        'Expected Learner Actions',	'Critical Actions Checklist', 	
                        'Interprofessional Collaboration Opportunities',
                        'Discussion Prompts for Learners',	'Debriefing Prompts','Adaptability Notes',
                        'Simulation Format Suggestions', 'Teaching pearls', 'Reference']

    const downloadDoc = async () => {
        const children = [];

        includeList.forEach((col) => {
            const content = details[col];
            if (!content) return;

            // Add heading
            children.push(
            new Paragraph({
                text: col,
                heading: HeadingLevel.HEADING_2,
                spacing: { after: 200 },
            })
            );

            const lines = content.split("\n").map(line => line.trim()).filter(Boolean);

            if (lines.length > 1) {
            // Add bullet list
            lines.forEach(line => {
                children.push(
                new Paragraph({
                    text: line,
                    bullet: {
                    level: 0,
                    },
                })
                );
            });
            } else {
            // Add single paragraph
            children.push(new Paragraph(lines[0]));
            }

            // Optional spacing after each section
            children.push(new Paragraph("")); // blank line
        });

        const doc = new Document({
            sections: [
            {
                properties: {},
                children,
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