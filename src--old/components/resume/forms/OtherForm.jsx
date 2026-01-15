import { Plus, X } from 'lucide-react';
import { useResume } from '../../../context/ResumeContext';

const OtherForm = () => {
    const { resumeData, addOther, updateOther, removeOther } = useResume();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-700">Other</h3>
                <button
                    onClick={addOther}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    <Plus className="w-4 h-4" />
                    Add
                </button>
            </div>

            {resumeData.other.map((item) => (
                <div
                    key={item.id}
                    className="space-y-3 border border-gray-200 rounded-md p-4 relative"
                >
                    <button
                        onClick={() => removeOther(item.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <input
                        type="text"
                        value={item.title}
                        onChange={(e) =>
                            updateOther(item.id, 'title', e.target.value)
                        }
                        placeholder="Title (e.g. Certification, Award)"
                        className="w-full rounded-md border-gray-300 p-2 border focus:border-blue-500 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        value={item.year}
                        onChange={(e) =>
                            updateOther(item.id, 'year', e.target.value)
                        }
                        placeholder="Year"
                        className="w-full rounded-md border-gray-300 p-2 border focus:border-blue-500 focus:ring-blue-500"
                    />

                    <textarea
                        value={item.description}
                        onChange={(e) =>
                            updateOther(item.id, 'description', e.target.value)
                        }
                        placeholder="Description"
                        rows={3}
                        className="w-full rounded-md border-gray-300 p-2 border focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
            ))}
        </div>
    );
};

export default OtherForm;
