import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './PortfolioFormPage.module.css';
import { createProfessional } from '../services/api';
import Header from '../components/Header';

const formSections = [
    'Basic Details', 'About', 'Skills', 'Services', 'Portfolio','Testimonials'
];

const PortfolioFormPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(formSections[0]);

    
const [formData, setFormData] = useState({
    templateId: 1,
    hero: { name: '', title: '', profileImage: '' },
    about: { 
        bio: '', 
        email: '', 
        phone: '', 
        location: '',
        socials: { linkedin: '', twitter: '', github: '' } // Added socials
    },
    skills: [{ name: '', level: 50 }],
    services: [{ title: '', description: '' }],
    portfolio: [{ title: '', description: '', image: '', url: '' }],
    testimonials: [{ quote: '', client: '' }], // Added testimonials
});

    useEffect(() => {
        if (location.state?.templateId) {
            setFormData(prev => ({ ...prev, templateId: location.state.templateId }));
        }
    }, [location.state]);

    const handleInputChange = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };
    
    const handleArrayChange = (section, index, field, value) => {
        const updatedArray = [...formData[section]];
        updatedArray[index][field] = value;
        setFormData(prev => ({ ...prev, [section]: updatedArray }));
    };

    const addItem = (section) => {
        const newItem = section === 'skills' ? { name: '', level: 50 } :
                        section === 'services' ? { title: '', description: '' } :
                        { title: '', description: '', image: '' };
        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], newItem]
        }));
    };

    const removeItem = (section, index) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProfessional(formData);
            alert('Profile created successfully!');
            // Later, we will navigate to the professionals list page
            navigate('/professionals');
        } catch (error) {
            alert('Failed to create profile. Please check the console.');
        }
    };
// In src/pages/PortfolioFormPage.jsx
const handleNestedInputChange = (section, nestedSection, field, value) => {
    setFormData(prev => ({
        ...prev,
        [section]: {
            ...prev[section],
            [nestedSection]: {
                ...prev[section][nestedSection],
                [field]: value
            }
        }
    }));
};
    // In src/pages/PortfolioFormPage.jsx

const renderSection = () => {
    switch (activeTab) {
        case 'Basic Details':
            return (
                <div>
                    <h3>Basic Details</h3>
                    <input type="text" placeholder="Your Name" value={formData.hero.name} onChange={(e) => handleInputChange('hero', 'name', e.target.value)} required />
                    <input type="text" placeholder="Your Title (e.g., Software Engineer)" value={formData.hero.title} onChange={(e) => handleInputChange('hero', 'title', e.target.value)} required />
                    <input type="text" placeholder="Profile Image URL" value={formData.hero.profileImage} onChange={(e) => handleInputChange('hero', 'profileImage', e.target.value)} />
                </div>
            );
        case 'About':
            return (
                <div>
                    <h3>About You</h3>
                    <textarea placeholder="Your Bio" value={formData.about.bio} onChange={(e) => handleInputChange('about', 'bio', e.target.value)}></textarea>
                    <input type="email" placeholder="Email" value={formData.about.email} onChange={(e) => handleInputChange('about', 'email', e.target.value)} required />
                    <input type="tel" placeholder="Phone Number" value={formData.about.phone} onChange={(e) => handleInputChange('about', 'phone', e.target.value)} />
                    <input type="text" placeholder="Location (e.g., San Francisco, CA)" value={formData.about.location} onChange={(e) => handleInputChange('about', 'location', e.target.value)} />
                    <h4>Social Links</h4>
                    <input type="text" placeholder="LinkedIn URL" value={formData.about.socials.linkedin} onChange={(e) => handleNestedInputChange('about', 'socials', 'linkedin', e.target.value)} />
                    <input type="text" placeholder="Twitter URL" value={formData.about.socials.twitter} onChange={(e) => handleNestedInputChange('about', 'socials', 'twitter', e.target.value)} />
                    <input type="text" placeholder="GitHub URL" value={formData.about.socials.github} onChange={(e) => handleNestedInputChange('about', 'socials', 'github', e.target.value)} />
                </div>
            );
        case 'Skills':
            // This section remains the same
            return (
                <div>
                    <h3>Your Skills</h3>
                    {formData.skills.map((skill, index) => (
                        <div key={index} className={styles.arrayItem}>
                            <input type="text" placeholder="Skill (e.g., React)" value={skill.name} onChange={(e) => handleArrayChange('skills', index, 'name', e.target.value)} />
                            <input type="range" min="0" max="100" value={skill.level} onChange={(e) => handleArrayChange('skills', index, 'level', parseInt(e.target.value))} />
                            <span>{skill.level}%</span>
                            <button type="button" onClick={() => removeItem('skills', index)} className={styles.removeBtn}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addItem('skills')} className={styles.addBtn}>Add Skill</button>
                </div>
            );
        case 'Services':
            return (
                <div>
                    <h3>Services You Offer</h3>
                    {formData.services.map((service, index) => (
                        <div key={index} className={styles.arrayItem}>
                            <input type="text" placeholder="Service Title" value={service.title} onChange={(e) => handleArrayChange('services', index, 'title', e.target.value)} />
                            <textarea placeholder="Service Description" value={service.description} onChange={(e) => handleArrayChange('services', index, 'description', e.target.value)} className={styles.arrayTextarea}></textarea>
                            <button type="button" onClick={() => removeItem('services', index)} className={styles.removeBtn}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addItem('services')} className={styles.addBtn}>Add Service</button>
                </div>
            );
        case 'Portfolio':
            return (
                <div>
                    <h3>Your Projects</h3>
                    {formData.portfolio.map((project, index) => (
                        <div key={index} className={styles.arrayItem}>
                            <input type="text" placeholder="Project Title" value={project.title} onChange={(e) => handleArrayChange('portfolio', index, 'title', e.target.value)} />
                            <input type="text" placeholder="Project Image URL" value={project.image} onChange={(e) => handleArrayChange('portfolio', index, 'image', e.target.value)} />
                            <input type="text" placeholder="Project URL (e.g., GitHub, Live Demo)" value={project.url} onChange={(e) => handleArrayChange('portfolio', index, 'url', e.target.value)} />
                            <textarea placeholder="Project Description" value={project.description} onChange={(e) => handleArrayChange('portfolio', index, 'description', e.target.value)} className={styles.arrayTextarea}></textarea>
                            <button type="button" onClick={() => removeItem('portfolio', index)} className={styles.removeBtn}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addItem('portfolio')} className={styles.addBtn}>Add Project</button>
                </div>
            );
        case 'Testimonials':
             return (
                <div>
                    <h3>Client Testimonials</h3>
                    {formData.testimonials.map((item, index) => (
                        <div key={index} className={styles.arrayItem}>
                            <input type="text" placeholder="Client Name" value={item.client} onChange={(e) => handleArrayChange('testimonials', index, 'client', e.target.value)} />
                            <textarea placeholder="Client's Quote" value={item.quote} onChange={(e) => handleArrayChange('testimonials', index, 'quote', e.target.value)} className={styles.arrayTextarea}></textarea>
                            <button type="button" onClick={() => removeItem('testimonials', index)} className={styles.removeBtn}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addItem('testimonials')} className={styles.addBtn}>Add Testimonial</button>
                </div>
            );
        default:
            return null;
    }
};

    return (
        <>
        <Header/>
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.tabs}>
                    {formSections.map(tab => (
                        <button
                            key={tab}
                            type="button"
                            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className={styles.formContent}>
                    {renderSection()}
                </div>
                <div className={styles.formActions}>
                    <button type="submit" className={styles.submitBtn}>Create Profile</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default PortfolioFormPage;