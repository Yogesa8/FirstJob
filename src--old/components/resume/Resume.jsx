import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Template1 from '../../assets/template/template1.png';
import Template2 from '../../assets/template/template2.png';
import Template3 from '../../assets/template/template3.png';
import { useResume } from '../../context/ResumeContext';

// Rating component
const Rating = ({ rating, name }) => {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <input
                    key={star}
                    type="radio"
                    name={`rating-${name}`}
                    className="mask mask-star-2 bg-orange-400"
                    aria-label={`${star} star`}
                    defaultChecked={star <= rating}
                    readOnly
                />
            ))}
        </div>
    );
};

const Resume = () => {
    const { setSelectedTemplate } = useResume();

    const templates = [
        { 
            id: 'template1', 
            name: 'Professional', 
            img: Template1,
            description: 'Best for corporate roles and standard applications.',
            recommended: true,
            rating: 5
        },
        { 
            id: 'template2', 
            name: 'Minimal', 
            img: Template2,
            description: 'Clean and simple design perfect for creative industries.',
            recommended: false,
            rating: 4
        },
        { 
            id: 'template3', 
            name: 'Creative', 
            img: Template3,
            description: 'Stand out with this modern and vibrant template.',
            recommended: false,
            rating: 3
        },
        { 
            id: 'template4', 
            name: 'Modern', 
            img: Template1,
            description: 'Contemporary design with a focus on skills and achievements.',
            recommended: false,
            rating: 4
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Newest Resume Templates
                    <span className="text-blue-600 block sm:inline"> [2025 Collection]</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-gray-500">
                    Select a template and start building your career story. Real-time updates, PDF export, and verified designs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {templates.map(template => (
                    <div key={template.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        {/* Recommended Badge */}
                        {template.recommended && (
                            <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                <Star className="w-3 h-3 mr-1 fill-current" />
                                Recommended
                            </div>
                        )}
                        
                        {/* Template Preview */}
                        <div className="h-80 bg-gray-100 flex items-center justify-center p-4">
                            <img 
                                src={template.img} 
                                alt={`${template.name} Template`} 
                                className='h-full object-contain transition-transform duration-300 group-hover:scale-105' 
                            />
                        </div>
                        
                        {/* Template Info */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                            
                            {/* Rating */}
                            <div className="mb-3">
                                <Rating rating={template.rating} name={template.id} />
                            </div>
                            
                            <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
                            
                            {/* Features List */}
                            <div className="mb-4 space-y-1">
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    <span>Professional design</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    <span>ATS-friendly</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    <span>Easy to customize</span>
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Link 
                                    to="/builder" 
                                    onClick={() => setSelectedTemplate(template.id)}
                                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                >
                                    Use Template
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                                {/* <button className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                    Download Word Template
                                </button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Resume;