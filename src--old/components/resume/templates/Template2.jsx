import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';

const Template2 = ({ data }) => {
  const { personal, education, experience, skills } = data;

  return (
    <div id="resume-preview" className="w-full h-full bg-white text-gray-800 p-8 font-sans">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">
          {personal.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-blue-600 font-medium mb-3">{personal.role || 'Professional Role'}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
          {personal.email && (
            <div className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" />
              <span>{personal.linkedin}</span>
            </div>
          )}
          {personal.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personal.location}</span>
            </div>
          )}
          {personal.website && (
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>{personal.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personal.summary && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase text-gray-400 mb-2 tracking-wider">Summary</h2>
          <div
            className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: personal.summary }}
          />
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase text-gray-400 mb-3 tracking-wider">Experience</h2>
          <div className="space-y-4">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-900 text-base">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.duration}</span>
                </div>
                <div className="text-blue-600 text-sm font-medium mb-1">{exp.company}</div>
                {/* <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{exp.description}</p> */}
                <div
                    className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-12 gap-8">
        {/* Education */}
        {education.length > 0 && (
          <div className={`${skills.length > 0 ? 'col-span-7' : 'col-span-12'}`}>
            <section>
              <h2 className="text-sm font-bold uppercase text-gray-400 mb-3 tracking-wider">Education</h2>
              <div className="space-y-3">
                {education.map(edu => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-900">{edu.school}</h3>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                    <p className="text-sm text-gray-700">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className={`${education.length > 0 ? 'col-span-5' : 'col-span-12'}`}>
            <section>
              <h2 className="text-sm font-bold uppercase text-gray-400 mb-3 tracking-wider">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-50 text-gray-700 text-xs font-medium border border-gray-200 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template2;
