import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../../../assets/assets'
import { resumeTemplates } from '../../../assets/resumeTemplates'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, CirclePlus, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react'
import PersonalInfoForm from '../components/forms/PersonalInfoForm'
import ResumePreview from '../components/preview/ResumePreview'
import TemplateSelector from '../components/preview/TemplateSelector'
import ColorPicker from '../components/preview/ColorPicker'
import ProfessionalSummaryForm from '../components/forms/ProfessionalSummaryForm'
import ExperienceForm from '../components/forms/ExperienceForm'
import EducationForm from '../components/forms/EducationForm'
import ProjectForm from '../components/forms/ProjectForm'
import SkillsForm from '../components/forms/SkillsForm'
import Others from '../components/forms/Others'


const ResumeBuilder = () => {

  const { resumeId } = useParams()
  console.log(resumeId)

  // Find the selected template from resumeTemplates based on resumeId
  const selectedTemplateData = resumeTemplates.find(template => template.id === resumeId)

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    other: { languages: '', certifications: '', hobbies: '', fields: [] },
    template: selectedTemplateData ? selectedTemplateData.id : "classic",
    accent_color: selectedTemplateData ? selectedTemplateData.accentColor : "#3B82F6",
    public: false,
  })

  const loadExistingResume = async () => {
    const resume = dummyResumeData.find(resume => resume._id === resumeId)
    if (resume) {
      setResumeData(resume)
      document.title = resume.title
    } else if (selectedTemplateData) {
      // If no existing resume found but template is selected, set the template data
      setResumeData(prev => ({
        ...prev,
        template: selectedTemplateData.id,
        accent_color: selectedTemplateData.accentColor,
        title: `New Resume - ${selectedTemplateData.name}`
      }))
      document.title = `New Resume - ${selectedTemplateData.name}`
    }
  }

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
    { id: "other", name: "Other", icon: CirclePlus },
  ]

  const activeSection = sections[activeSectionIndex]

  useEffect(() => {
    loadExistingResume()
  }, [resumeId])

  const changeResumeVisibility = async () => {
    setResumeData({ ...resumeData, public: !resumeData.public })
  }

  const handleShare = () => {
    const frontendUrl = window.location.href.split('/app/')[0];
    const resumeUrl = frontendUrl + '/view/' + resumeId;

    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: 'My Resume', })
    }
    else {
      alert('Share not supported on this browser.')
    }
  }

  const downloadResume = () => {
    console.log(resumeData,"resumeData")
    // window.print();
  }

  return (
    <div>
      <div className='max-w-full mx-auto px-4  pb-0 py-15'>
        <div className='max-w-full grid lg:grid-cols-12 gap-8 lg:w-[90%] mx-auto'>
          {/* Left Panel - Form */}
          <div className='w-full relative lg:col-span-5 rounded-lg overflow-auto'>
            <div className=' bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1 '>
              {/* progress bar using activeSectionIndex */}
              <hr className='absolute top-0 left-0 right-0 border-2 border-gray-200' />
              <hr className='absolute top-0 left-0 h-1 bg-linear-to-r from-orange-500 to-orange-600 border-none transition-all duration-200' style={{ width: `${activeSectionIndex * 100 / (sections.length - 1)}%` }} />

              {/* Section Navigation */}
              <div className='flex justify-between items-center mb-6 border-b border-gray-300 py-1'>
                <div className='flex items-center gap-2'>
                  <TemplateSelector selectedTemplate={resumeData.template} onChange={(template) => setResumeData(prev => ({ ...prev, template }))} />
                  <ColorPicker selectedColor={resumeData.accent_color} onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color }))} />
                </div>

                <div className='flex items-center'>
                  {activeSectionIndex !== 0 && (
                    <button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
                      <ChevronLeft className='size-4' /> Previous
                    </button>
                  )}
                  <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length - 1 && 'opacity-50'}`} disabled={activeSectionIndex === sections.length - 1}>
                    Next <ChevronRight className='size-4' />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className='space-y-6'>
                {activeSection.id === 'personal' && (
                  <PersonalInfoForm data={resumeData.personal_info} onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />
                )}
                {activeSection.id === 'summary' && (
                  <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))} setResumeData={setResumeData} />
                )}
                {activeSection.id === 'experience' && (<ExperienceForm data={resumeData.experience} onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))} />
                )}
                {activeSection.id === 'education' && (<EducationForm data={resumeData.education} onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))} />
                )}
                {activeSection.id === 'projects' && (<ProjectForm data={resumeData.projects} onChange={(data) => setResumeData(prev => ({ ...prev, projects: data }))} />
                )}
                {activeSection.id === 'skills' && (<SkillsForm data={resumeData.skills} onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))} />
                )}
                {activeSection.id === 'other' && (<Others data={resumeData.other} onChange={(data) => setResumeData(prev => ({ ...prev, other: data }))} />
                )}
              </div>
              <button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} className='bg-linear-to-br from-orange-100 to-orange-200 ring-orange-300 text-orange-600 ring hover:ring-orange-400 transition-all rounded-md px-6 py-2 mt-6 text-sm'>
                Save Changes
              </button>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className='lg:col-span-7 max-lg:mt-6 h-max-full'>
            <div className='relative w-full'>
              <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
                {resumeData.public && (
                  <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors '>
                    <Share2Icon className='size-4' /> Share
                  </button>
                )}
                <button onClick={changeResumeVisibility} className='flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors'>
                  {resumeData.public ? <EyeIcon className='size-4' /> : <EyeOffIcon className='size-4' />}
                  {resumeData.public ? 'Public' : 'Private'}
                </button>
                <button onClick={downloadResume} className='flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors'>
                  <DownloadIcon className='size-4' /> Download
                </button>
              </div>
            </div>

            <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder