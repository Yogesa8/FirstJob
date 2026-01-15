import template1 from './template_minimal_modern.png'
import template2 from './template_classic_professional.png'
import template3 from './template_creative_sidebar.png'
import template4 from './template_elegant_minimal.png'

export const resumeTemplates = [
    {
        id: 'minimal-image',
        name: 'Minimal Modern',
        description: 'Clean and contemporary design perfect for tech professionals',
        preview: template1,
        rating: 5,
        recommended: true,
        accentColor: '#14B8A6'
    },
    {
        id: 'classic',
        name: 'Classic Professional',
        description: 'Traditional layout ideal for corporate positions',
        preview: template2,
        rating: 4,
        recommended: true,
        accentColor: '#6366F1'
    },
    {
        id: 'modern',
        name: 'Creative Sidebar',
        description: 'Modern sidebar layout for creative professionals',
        preview: template3,
        rating: 4,
        recommended: false,
        accentColor: '#F59E0B'
    },
    {
        id: 'minimal',
        name: 'Elegant Minimal',
        description: 'Sophisticated minimalist design with refined aesthetics',
        preview: template4,
        rating: 5,
        recommended: false,
        accentColor: '#10B981'
    },
    {
        id: 'compact',
        name: 'Compact',
        description: 'Compact and efficient layout ideal for one-page resumes',
        preview: template1,
        rating: 4,
        recommended: false,
        accentColor: '#FB7185'
    },
    {
        id: 'maximum',
        name: 'Maximum Detail',
        description: 'Comprehensive layout for detailed experiences and projects',
        preview: template2,
        rating: 4,
        recommended: false,
        accentColor: '#7C3AED'
    },
    {
        id: 'smart',
        name: 'Smart',
        description: 'Smart layout focusing on skills and achievements',
        preview: template3,
        rating: 5,
        recommended: true,
        accentColor: '#06B6D4'
    },
    {
        id: 'standard',
        name: 'Standard',
        description: 'Classic standard layout compatible with most ATS',
        preview: template4,
        rating: 4,
        recommended: false,
        accentColor: '#F59E0B'
    },
    {
        id: 'structure',
        name: 'Structured',
        description: 'Well-structured layout with clear hierarchy for detailed profiles',
        preview: template1,
        rating: 5,
        recommended: false,
        accentColor: '#10B981'
    }
]
