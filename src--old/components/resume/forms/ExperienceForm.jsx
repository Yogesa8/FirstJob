import { Trash2, Plus } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';
import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic, BtnBulletList, BtnNumberedList, BtnLink, BtnStrikeThrough, BtnUndo, BtnRedo } from 'react-simple-wysiwyg';


const ExperienceForm = () => {
    const { resumeData, addExperience, updateExperience, removeExperience } = useResume();

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Experience</h3>

            {resumeData.experience.map((exp) => (
                <div key={exp.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group">
                    <button
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-2 right-2 text-red-500 hover:bg-red-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase">Company</label>
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 uppercase">Role</label>
                                <input
                                    type="text"
                                    value={exp.role}
                                    onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase">Duration</label>
                            <input
                                type="text"
                                value={exp.duration}
                                onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                                placeholder="Jan 2022 - Present"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase">Description</label>
                            {/* <textarea
                                rows={3}
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                                placeholder="Key achievements and responsibilities..."
                            /> */}
                            <EditorProvider>
                                <Editor
                                    value={exp.description}
                                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
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
            ))}

            <button
                onClick={addExperience}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
                <Plus className="w-4 h-4" /> Add Experience
            </button>
        </div>
    );
};

export default ExperienceForm;
