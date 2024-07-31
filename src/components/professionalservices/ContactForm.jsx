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
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
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
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="lastName" className="block text-sm font-medium text-white">
          Last Name *
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
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
        value={formData.companyName}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="jobTitle" className="block text-sm font-medium text-white">
        Job Title *
      </label>
      <input
        type="text"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
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
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
      >
        <option value="" disabled>
          Which of these best describes your business?
        </option>
        <option value="3PL">Third-Party Logistics (3PL)</option>
        <option value="4PL">Fourth-Party Logistics (4PL)</option>
        <option value="Brand/Merchant">Brand/Merchant</option>
        <option value="Retailer">Retailer</option>
        <option value="Marketplace Seller">Marketplace Seller</option>
        <option value="Other">Other</option>
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
          className="mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
        >
          <option value="+92">Pakistan (+92)</option>
          {/* Add other country codes as needed */}
        </select>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-gray-900 sm:text-sm"
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
