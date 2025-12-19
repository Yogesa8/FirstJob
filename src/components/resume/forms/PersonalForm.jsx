import { useResume } from "../../../context/ResumeContext";
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnBulletList, BtnNumberedList, BtnLink, BtnStrikeThrough, BtnUndo, BtnRedo } from 'react-simple-wysiwyg';

const PersonalForm = () => {
    const { resumeData, updatePersonal } = useResume();

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={resumeData.personal.fullName}
                        onChange={(e) => updatePersonal('fullName', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        value={resumeData.personal.role}
                        onChange={(e) => updatePersonal('role', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Software Engineer"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={resumeData.personal.email}
                        onChange={(e) => updatePersonal('email', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        value={resumeData.personal.phone}
                        onChange={(e) => updatePersonal('phone', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="+1 234 567 890"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <input
                        type="tex"
                        value={resumeData.personal.linkedin}
                        onChange={(e) => updatePersonal('linkedin', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="linkedin.com/in/johndoe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        value={resumeData.personal.location}
                        onChange={(e) => updatePersonal('location', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="New York, NY"
                    />
                </div>
                <div className="col-span-1 md:col-span-2 border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
                    {/* <textarea
                        rows={4}
                        value={resumeData.personal.summary}
                        onChange={(e) => updatePersonal('summary', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                        placeholder="Brief summary of your career..."
                    /> */}
                    <EditorProvider>
                        <Editor
                            value={resumeData.personal.summary}
                            onChange={(e) => updatePersonal('summary', e.target.value)}
                            containerProps={{
                                style: {
                                    height: '250px',
                                    border: 'none',
                                    padding: '10px'
                                }
                            }}
                            className="editor-content"
                        >
                            <Toolbar className="bg-gray-50 border-b border-gray-200 p-2 flex gap-1 flex-wrap">
                                <BtnUndo title="Undo" />
                                <BtnRedo title="Redo" />
                                <div className="w-px h-6 bg-gray-300 mx-1" />
                                <BtnBold title="Bold" />
                                <BtnItalic title="Italic" />
                                <BtnStrikeThrough title="Strike" />
                                <div className="w-px h-6 bg-gray-300 mx-1" />
                                <BtnBulletList title="Bullets" />
                                <BtnNumberedList title="Numbers" />
                                <div className="w-px h-6 bg-gray-300 mx-1" />
                                <BtnLink title="Link" />
                            </Toolbar>
                        </Editor>
                    </EditorProvider>
                </div>
            </div>
        </div>
    );
};

export default PersonalForm;
