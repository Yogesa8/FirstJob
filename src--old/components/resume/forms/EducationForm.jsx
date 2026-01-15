import { Trash2, Plus } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

const EducationForm = () => {
    const { resumeData, addEducation, updateEducation, removeEducation } = useResume();

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Education</h3>

            {resumeData.education.map((edu, index) => (
                <div key={edu.id} className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group">
                    <button
                        onClick={() => removeEducation(edu.id)}
                        className="absolute top-2 right-2 text-red-500 hover:bg-red-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase">School / University</label>
                            <input
                                type="text"
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase">Degree</label>
                            <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 uppercase">Year</label>
                            <input
                                type="text"
                                value={edu.year}
                                onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border"
                                placeholder="2018 - 2022"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                onClick={addEducation}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
                <Plus className="w-4 h-4" /> Add Education
            </button>
        </div>
    );
};

export default EducationForm;
