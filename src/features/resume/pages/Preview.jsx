import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../../../assets/assets'
import ResumePreview from '../components/preview/ResumePreview'
import { ArrowLeftIcon, Loader } from 'lucide-react'

const Preview = () => {
  const { resumeId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResume = async ()=>{
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId) || null)
    setIsLoading(false)
  }

  useEffect(()=>{
    loadResume()
  },[resumeId])

  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} classes='py-4 bg-white'/>
      </div>
    </div>
  ) : (
    <div className='flex justify-center items-center h-64'>
      {isLoading ? <Loader className='animate-spin size-12 text-gray-500' size={48} /> : (
        <div>
          <p>Resume not found</p>
          <a href="/" className='mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'>
            <ArrowLeftIcon className='mr-2 size-4' />
            go to home page
          </a>
        </div>
      ) }
    </div>
  )
}

export default Preview