import React from 'react'

export default function Footer() {

    return (
        <footer className="bg-gray-300 text-black py-6 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My E-Commerce Store. All rights reserved.</p>
                <div className="mt-3 flex justify-center space-x-4">
                    <a href="#" className="hover:text-gray-600">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-600">Terms of Service</a>
                    <a href="#" className="hover:text-gray-600">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}


