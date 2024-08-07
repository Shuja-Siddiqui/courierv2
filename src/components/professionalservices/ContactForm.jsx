import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        businessEmail: '',
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        businessType: '',
        phoneNumber: '',
        countryCode: '+92',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
      };
    
  return (
    <form onSubmit={handleSubmit} className="max-w-md  right-0 mx-auto p-6 bg-cardbackground rounded-lg shadow-md space-y-4">
    <div>
      <label htmlFor="businessEmail" className="block text-sm font-medium text-white">
        Business Email *
      </label>
      <input
        type="email"
        name="businessEmail"
        value={formData.businessEmail}
        onChange={handleChange}
        placeholder='Enter your email'
        required
        // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
         className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      />
    </div>

    <div className="flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="firstName" className="block text-sm font-medium text-white">
          First Name *
        </label>
        <input
          type="text"
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          required
          // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="lastName" className="block text-sm font-medium text-white">
          Last Name *
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        />
      </div>
    </div>

    <div>
      <label htmlFor="companyName" className="block text-sm font-medium text-white">
        Company Name *
      </label>
      <input
        type="text"
        name="companyName"
        placeholder="Enter you company name"
        value={formData.companyName}
        onChange={handleChange}
        required
        // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      />
    </div>

    <div>
      <label htmlFor="jobTitle" className="block text-sm font-medium text-white">
        Job Title *
      </label>
      <input
        type="text"
        name="jobTitle"
        placeholder="Enter your job title"
        value={formData.jobTitle}
        onChange={handleChange}
        required
        // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      />
    </div>

    <div>
      <label htmlFor="businessType" className="block text-sm font-medium text-white">
        Which of these best describes your business? *
      </label>
      <select
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        required
        // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
      >
        <option value="" disabled>
          Which of these best describes your business?
        </option>
        <option className='bg-background' value="3PL">Third-Party Logistics (3PL)</option>
        <option className='bg-background' value="4PL">Fourth-Party Logistics (4PL)</option>
        <option className='bg-background' value="Brand/Merchant">Brand/Merchant</option>
        <option className='bg-background' value="Retailer">Retailer</option>
        <option className='bg-background' value="Marketplace Seller">Marketplace Seller</option>
        <option className='bg-background' value="Other">Other</option>
      </select>
    </div>

    <div>
      <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
        Phone Number *
      </label>
      <div className="flex gap-2">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          // className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            className="rounded-md w-20 border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        >
          <option value="+92">Pakistan (+92)</option>
          {/* Add other country codes as needed */}
        </select>
        <input
          type="text"
          name="phoneNumber"
          placeholder="3xx-xxxxxxx"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          // className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
            className="rounded-md w-full border-none bg-gray-400 bg-opacity-50 px-2 py-2  text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="w-full bg-cardbackground px-4 py-2 hover:scale-105  border-[0.5px] border-gray-700 rounded-md"
      >
        Submit
      </button>
    </div>
  </form>
  )
}
