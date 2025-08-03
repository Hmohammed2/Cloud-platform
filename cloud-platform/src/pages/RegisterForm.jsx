import React, { useState } from 'react';

export const RegisterForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        experience: '',
        motivation: '',
        timing: '',
        heardFrom: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: send formData to API
        console.log(formData);
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4'>
            <div className='relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md mx-auto p-6 overflow-y-auto max-h-full'>
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 text-black hover:text-gray-400'
                    aria-label='Close modal'
                >
                    ✕
                </button>
                <h2 className='text-2xl font-bold mt-2 mb-2 text-gray-800 text-center'>Register Your Interest</h2>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-6 text-center'>Fields marked <span className='text-red-500'>*</span> are required.</p>
                <form onSubmit={handleSubmit} className='space-y-4'>

                    {/* Full Name */}
                    <div>
                        <label htmlFor='name' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Full Name <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            aria-required='true'
                            value={formData.name}
                            onChange={handleChange}
                            className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor='email' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Email Address <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            aria-required='true'
                            value={formData.email}
                            onChange={handleChange}
                            className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Current Role / Job Title */}
                    <div>
                        <label htmlFor='role' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Current Role / Job Title
                        </label>
                        <input
                            type='text'
                            id='role'
                            name='role'
                            value={formData.role}
                            onChange={handleChange}
                            className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Cloud Experience Level */}
                    <div>
                        <label htmlFor='experience' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Cloud Experience Level
                        </label>
                        <select
                            id='experience'
                            name='experience'
                            value={formData.experience}
                            onChange={handleChange}
                            className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select experience level</option>
                            <option value='none'>No experience</option>
                            <option value='self-study'>Some self-study</option>
                            <option value='professional'>Professional experience</option>
                        </select>
                    </div>

                    {/* Primary Motivation / Goal */}
                    <div>
                        <label htmlFor='motivation' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>
                            Primary Motivation / Goal
                        </label>
                        <select
                            id='motivation'
                            name='motivation'
                            value={formData.motivation}
                            onChange={handleChange}
                            className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select your motivation</option>
                            <option value='career-change'>Career change</option>
                            <option value='cert-prep'>Certification prep</option>
                            <option value='skill-up'>Skill up for current job</option>
                            <option value='just-curious'>Just curious</option>
                        </select>
                    </div>

                    {/* Heard From & Timing Side by Side */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {/* How Did You Hear About Us? */}
                        <div>
                            <label htmlFor='heardFrom' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>How Did You Hear About Us?</label>
                            <select
                                id='heardFrom'
                                name='heardFrom'
                                value={formData.heardFrom}
                                onChange={handleChange}
                                className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            >
                                <option value=''>Select an option</option>
                                <option value='social-media'>Social media</option>
                                <option value='referral'>Referral</option>
                                <option value='search'>Search</option>
                                <option value='newsletter'>Email newsletter</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='timing' className='text-left block text-sm font-medium text-gray-700 dark:text-gray-300'>Preferred Timing</label>
                            <select
                                id='timing'
                                name='timing'
                                value={formData.timing}
                                onChange={handleChange}
                                className='mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            >
                                <option value=''>Select timing</option>
                                <option value='weekday-evenings'>Weekday evenings</option>
                                <option value='weekend-mornings'>Weekend mornings</option>
                                <option value='self-paced'>Self-paced</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
