import { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      role: '',
      email: '',
      phone: '',
      linkedin: '',
      website: '',
      location: '',
      summary: ''
    },
    education: [
    ],
    experience: [
    ],
    skills: [],
    other: []
  });

  const updatePersonal = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now(), school: '', degree: '', year: '' }]
    }));
  };

  const updateEducation = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now(), company: '', role: '', duration: '', description: '' }]
    }));
  };

  const updateExperience = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addSkill = (skill) => {
    if (!resumeData.skills.includes(skill)) {
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skill) => {
    setResumeData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const addOther = () => {
    setResumeData(prev => ({
      ...prev,
      other: [...prev.other, { id: Date.now(), title: '', year: '', description: '' }]
    }));
  };

  const updateOther = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      other: prev.other.map(other => other.id === id ? { ...other, [field]: value } : other)
    }));
  };

  const removeOther = (id) => {
    setResumeData(prev => ({
      ...prev,
      other: prev.other.filter(other => other.id !== id)
    }));
  };



  return (
    <ResumeContext.Provider value={{
      resumeData,
      setResumeData,
      updatePersonal,
      addEducation,
      updateEducation,
      removeEducation,
      addExperience,
      updateExperience,
      removeExperience,
      addSkill,
      removeSkill,
      selectedTemplate,
      setSelectedTemplate,
      addOther,
      updateOther,
      removeOther
    }}>
      {children}
    </ResumeContext.Provider>
  );
};
