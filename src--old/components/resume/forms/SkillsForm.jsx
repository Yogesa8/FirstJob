import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

const SkillsForm = () => {
    const { resumeData, addSkill, removeSkill } = useResume();
    const [newSkill, setNewSkill] = useState('');

    const handleAdd = () => {
        if (newSkill.trim()) {
            addSkill(newSkill.trim());
            setNewSkill('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Skills</h3>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    placeholder="e.g. React.js, Project Management..."
                />
                <button
                    onClick={handleAdd}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {skill}
                        <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 focus:outline-none hover:text-blue-900"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillsForm;
