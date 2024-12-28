import React from 'react';
import { Download, AlertCircle } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Download the Chrome Extension
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          To get started with the Chrome extension, download the zip file from the link below and follow the instructions:
        </p>

        <div className="mb-8">
          <a 
            href="aeon_chrome_extension.zip" 
            download="chrome-extension.zip"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm"
          >
            <Download className="h-5 w-5" />
            Download Chrome Extension
          </a>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-2" />
            <p className="text-blue-700">
              After downloading, follow these simple steps to install the extension in your Chrome browser.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Installation Instructions
        </h2>
        
        <ol className="space-y-4 text-gray-600">
          <li className="">
            <span className="font-bold text-red-600 pr-3">1.</span>
            Download the zip file from the link above.
          </li>
          <li className="">
            <span className="font-bold text-red-600 pr-3">2.</span>
            Unzip the downloaded file.
          </li>
          <li className="">
            <span className="font-bold text-red-600 pr-3">3.</span>
            Go to <span className="bg-gray-100 px-2 rounded text-gray-800">chrome://extensions</span> in your browser.
          </li>
          <li className=" ">
            <span className="font-bold text-red-600 pr-3">4.</span>
            Enable <span className="font-semibold text-gray-800">Developer mode</span> in the top right corner.
          </li>
          <li className="">
            <span className="font-bold text-red-600 pr-3">5.</span>
            Click on <span className="font-semibold text-gray-800">Load unpacked</span> and select the unzipped folder.
          </li>
          <li className="">
            <span className="font-bold text-red-600 pr-3">6.</span>
            The extension will be installed and ready to use!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DownloadPage;