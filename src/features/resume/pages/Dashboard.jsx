import { FilePenLineIcon, FileTextIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon, Star } from 'lucide-react'
import  { useState } from 'react'
import { resumeTemplates } from '../../../assets/resumeTemplates'
import { useNavigate } from 'react-router-dom'
import Banner from '../components/home/Banner'

const Dashboard = () => {
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const navigate = useNavigate()


  const createResume = async (event) => {
    event.preventDefault()
    setShowCreateResume(false)
    navigate(`/app/builder/res123`)

  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setShowUploadResume(false)
    navigate(`/app/builder/res123`)
  }

  const editTitle = async (event) => {
    event.preventDefault()
  }



  return (
    <div>
      {/* Fixed: Changed bg-linear to bg-gradient */}
      <Banner />

      {/* Fixed: Added px-4 for side padding and mt-6 for top spacing. Added max-w-5xl for desktop centering. */}
      <div className="max-w-5xl mx-auto px-4 mt-6 pb-10">

        {/* Top Action Buttons */}
        <div className="flex gap-4 justify-center sm:justify-start">
          <button onClick={() => setShowCreateResume(true)} className="p-5 w-full sm:w-auto sm:max-w-36 h-40 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-500 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-orange-300 to-orange-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-orange-600 transition-all duration-300 font-medium">Create Resume</p>
          </button>

          <button onClick={() => setShowUploadResume(true)} className="hidden p-5 w-full sm:w-auto sm:max-w-36 h-40 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-orange-300 to-orange-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-orange-600 transition-all duration-300 font-medium">Upload Existing</p>
          </button>
        </div>

        {/* Fixed: Changed to w-full for better responsiveness across devices */}
        <hr className="border-slate-300 my-8 w-full" />

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Newest Resume Templates
            <span className="text-orange-600 block sm:inline"> [2025 Collection]</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Select a template and start building your career story. Real-time updates, PDF export, and verified designs.
          </p>
        </div>

        {/* Resume Template Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {resumeTemplates.map((template, index) => {
            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${template.id}`)}
                className="relative w-full flex flex-col rounded-lg border border-slate-200 group hover:shadow-xl hover:border-orange-300 transition-all duration-300 cursor-pointer bg-white overflow-hidden"
              >
                {/* Recommended Badge */}
                {template.recommended && (
                  <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-linear-to-r from-orange-500 to-orange-600 text-white text-[10px] font-semibold rounded-full shadow-md">
                    Recommended
                  </div>
                )}

                {/* Template Preview Image */}
                <div className="w-full h-48 overflow-hidden bg-slate-50 border-b border-slate-200">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Template Info */}
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {template.name}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`size-3 ${star <= template.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-slate-200 text-slate-200'
                          }`}
                      />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">({template.rating}.0)</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* MODALS - Fixed styling for better mobile view */}

      {/* Create Resume Modal */}
      {showCreateResume && (
        <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div onClick={e => e.stopPropagation()} className="relative bg-white border shadow-xl rounded-lg w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Create a Resume</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              placeholder='Enter resume title'
              className="w-full px-4 py-2 mb-4 border border-slate-300 rounded-md focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all"
              required
            />
            <div className="flex gap-3">
              <button type="button" onClick={() => { setShowCreateResume(false); setTitle('') }} className="flex-1 py-2 bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors">Cancel</button>
              <button type="submit" className="flex-1 py-2 bg-orange-500 text-white rounded hover:bg-orange-700 transition-colors">Create</button>
            </div>
            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => { setShowCreateResume(false); setTitle('') }} />
          </div>
        </form>
      )}

      {/* Upload Resume Modal */}
      {showUploadResume && (
        <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div onClick={e => e.stopPropagation()} className="relative bg-white border shadow-xl rounded-lg w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Upload Resume</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              placeholder='Enter resume title'
              className="w-full px-4 py-2 mb-4 border border-slate-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all"
              required
            />
            <div className="mb-4">
              <label htmlFor='resume-input' className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {resume ? (
                    <p className="text-sm text-green-600 font-semibold flex items-center gap-2"><FileTextIcon className="size-5" /> {resume.name}</p>
                  ) : (
                    <>
                      <UploadCloudIcon className="size-8 text-slate-400 mb-2" />
                      <p className="text-sm text-slate-500"><span className="font-semibold">Click to upload</span> PDF</p>
                    </>
                  )}
                </div>
                <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
              </label>
            </div>
            <button type="submit" className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">Upload Resume</button>
            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => { setShowUploadResume(false); setTitle('') }} />
          </div>
        </form>
      )}

      {/* Edit Title Modal */}
      {editResumeId && (
        <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div onClick={e => e.stopPropagation()} className="relative bg-white border shadow-xl rounded-lg w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold mb-4 text-slate-800">Edit Resume Title</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type='text'
              placeholder='Enter resume title'
              className="w-full px-4 py-2 mb-4 border border-slate-300 rounded-md focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all"
              required
            />
            <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">Update</button>
            <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => { setEditResumeId(''); setTitle('') }} />
          </div>
        </form>
      )}
    </div>
  )
}

export default Dashboard