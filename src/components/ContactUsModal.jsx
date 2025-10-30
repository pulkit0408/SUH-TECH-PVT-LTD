import React from 'react';

const ContactUsModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full relative text-center">
        <button
          className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Contact Us</h2>
        <p className="mb-6 text-gray-800">
          Thank you for your interest!<br /> Please use the <b>Contact Us</b> section or email us at <a href="mailto:info@suhtech.top" className="text-purple-600 underline">info@suhtech.top</a> to get in touch.
        </p>
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactUsModal;
