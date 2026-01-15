import React from 'react'

const Others = ({ data = {}, onChange = () => { } }) => {
    const others = {
        languages: '',
        certifications: '',
        hobbies: '',
        fields: [],
        ...data
    }

    const update = (patch) => {
        onChange({ ...others, ...patch })
    }

    const updateField = (index, key, value) => {
        const fields = [...(others.fields || [])]
        fields[index] = { ...fields[index], [key]: value }
        update({ fields })
    }

    const addField = () => {
        const fields = [...(others.fields || []), { title: '', value: '' }]
        update({ fields })
    }

    const removeField = (index) => {
        const fields = [...(others.fields || [])]
        fields.splice(index, 1)
        update({ fields })
    }

    return (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">Others</h3>
                <p className="text-sm text-gray-500">
                    Languages, certifications and hobbies
                </p>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Languages</label>
                <input
                    type="text"
                    placeholder="Eg: English, Hindi, Spanish"
                    value={others.languages || ''}
                    onChange={(e) => update({ languages: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Certifications</label>
                <input
                    type="text"
                    placeholder="Eg: AWS Certified Developer"
                    value={others.certifications || ''}
                    onChange={(e) => update({ certifications: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Hobbies</label>
                <input
                    type="text"
                    placeholder="Eg: Reading, Chess, Traveling"
                    value={others.hobbies || ''}
                    onChange={(e) => update({ hobbies: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 outline-none"
                />
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Custom Fields</label>
                    <button type="button" onClick={addField} className="text-sm text-blue-600 hover:underline">Add</button>
                </div>

                <div className="space-y-2 mt-2">
                    {(others.fields || []).map((f, i) => (
                        <div key={i} className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Title"
                                value={f.title || ''}
                                onChange={(e) => updateField(i, 'title', e.target.value)}
                                className="w-1/3 px-2 py-2 text-sm border border-gray-300 rounded-lg outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                value={f.value || ''}
                                onChange={(e) => updateField(i, 'value', e.target.value)}
                                className="flex-1 px-2 py-2 text-sm border border-gray-300 rounded-lg outline-none"
                            />
                            <button type="button" onClick={() => removeField(i)} className="px-3 py-2 text-sm text-red-600">Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Others
