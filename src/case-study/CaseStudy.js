import React from "react";
import './CaseStudy.css'
const CaseStudy = ({details}) => {
    const exceptList = ['Case Study No', 'Sno', 'Category']
    const includeList = ['Patient Profile',	'Present Complaint','Vital Signs',
                        'History of Present Illness', 'Past Medical History	Medications',
                        'Allergies', 	'Family History', 	'Social History',	
                        'Laboratory & Diagnostic Results',	'Symptom Evolution', 
                        'Clinical Reasoning Challenges for PA Learners',	
                        'Expected Learner Actions',	'Critical Actions Checklist', 	
                        'Interprofessional Collaboration Opportunities',
                        'Discussion Prompts for Learners	Debriefing Prompts','Adaptability Notes',
                        'Simulation Format Suggestions']
    return (
        <div className="case-study-container">
        {Object.keys(details).length > 0 &&
            includeList
            .filter((col) => !exceptList.includes(col))
            .map((col, index) => {
                return (
                details[col] && (
                    <div key={index}>
                    <h2>{col}</h2>
                    {/* <p>
                        {details[col].split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </p> */}
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
    )

}

export default CaseStudy