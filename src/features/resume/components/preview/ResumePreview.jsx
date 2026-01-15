import React from 'react'
import ClassicTemplate from '../templates/ClassicTemplate'
import ModernTemplate from '../templates/ModernTemplate'
import MinimalTemplate from '../templates/MinimalTemplate'
import MinimalImageTemplate from '../templates/MinimalImageTemplate'
import CompactTemplate from '../templates/CompactTemplate'
import MaximumTemplate from '../templates/MaximumTemplate'
import SmartTemplate from '../templates/SmartTemplate'
import StandardTemplate from '../templates/StandardTemplate'
import StructuredTemplate from '../templates/StructuredTemplate'

const ResumePreview = ({ data, template, accentColor, classes = '' }) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            case "compact":
                return <CompactTemplate data={data} accentColor={accentColor} />;
            case "maximum":
                return <MaximumTemplate data={data} accentColor={accentColor} />;
            case "smart":
                return <SmartTemplate data={data} accentColor={accentColor} />;
            case "standard":
                return <StandardTemplate data={data} accentColor={accentColor} />;
            case "structure":
                return <StructuredTemplate data={data} accentColor={accentColor} />;
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    };

    return (
        <div className='w-full bg-gray-100'>
            <div id='resume-preview' className={'border border-gray-200 print:shadow-none print:border-none' + classes}>
                {renderTemplate()}
            </div>

            <style>
                {`
                    @page {
                        size: letter;
                        margin:0;
                    }

                    @media print {
                        html, body {
                        width: 8.5in;
                        height: 11in;
                        overflow: hidden;
                    }

                    body *{
                        visibility: hidden;
                    }

                    #resume-preview, #resume-preview * {
                        visibility: visible;
                    }

                    #resume-preview {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: auto;
                        margin: 0;
                        padding: 0;
                        box-shadow: none !important;
                        border: none !important;
                    }
                }
                
                `}
            </style>

        </div>
    );
};

export default ResumePreview