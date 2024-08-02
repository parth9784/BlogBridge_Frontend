import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        toast.success("We will reach you soon!!")
        navigate("/")
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
            <div className="max-w-[600px] w-full">
                <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full p-2 border rounded-lg" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full p-2 border rounded-lg" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium">Message</label>
                        <textarea 
                            id="message" 
                            className="w-full p-2 border rounded-lg" 
                            rows="4" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-[#539F8D] text-white rounded-lg hover:bg-[#3f8570]">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
