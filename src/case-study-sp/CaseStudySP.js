import React, { useRef } from "react";
import './caseStudySP.css'
import { saveAs } from "file-saver";
import {
    Document,
    Packer,
    Paragraph,
    HeadingLevel,
    TextRun
} from "docx";

const CaseStudySP = ({details}) => {
    const contentRef = useRef();
    const exceptList = ['Sno', 'Name']
    const includeList = ['SP Profile', 'Case Objectives',
                        'Scene Setup', 'SP Opening line',
                        'Chief Complaint', 
                        'History of Present Illness', 'Vital Signs',
                        'Past Medical History', 'Medications',
                        'Allergies', 	'Family History', 	'Social History',
                        'Review of Systems', 'SP Behavior Cues',
                        'Menstrual History',	'Obstetric History','Sexual History',
                        'Physical Exam Findings',
                        'Laboratory & Diagnostic Results',
                        'Expected Learner Actions',	'Critical Actions Checklist',
                        'Discussion Question', 
                        'Debriefing Prompts','Adaptability',
                        'Reference']

    const downloadDoc = async () => {
        const children = [];

        includeList.forEach((col) => {
            const content = details[col];
            if (!content) return;

            // Add heading
            children.push(
            new Paragraph({
                // text: col,
                heading: HeadingLevel.HEADING_2,
                spacing: { after: 200 },
                children: [
                    new TextRun({
                      text: col,
                      size: 36, // 18pt
                      bold: true,
                    }),
                  ],
            })
            );

            const lines = content.split("\n").map(line => line.trim()).filter(Boolean);

            if (lines.length > 1) {
            // Add bullet list
            lines.forEach(line => {
                children.push(
                    new Paragraph({
                        bullet: {
                        level: 0,
                        },
                        children: [
                            new TextRun({
                                text: line,
                                size: 28, // 14pt (size is in half-points, so 14 * 2 = 28)
                            }),
                        ],
                    })
                );
            });
            } else {
            // Add single paragraph
                children.push(new Paragraph({
                    children: [
                        new TextRun({
                            text: lines[0],
                            size: 28, // 14pt (size is in half-points, so 14 * 2 = 28)
                        }),
                    ],
                }))
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
        saveAs(blob, "casestudy.docx");

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

export default CaseStudySP;