import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-gray-400 py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
                    <p className="mb-4 md:mb-0">&copy; 2025 Computech IT Solutions. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
