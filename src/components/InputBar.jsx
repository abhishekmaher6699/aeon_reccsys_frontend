import React, { useState } from 'react';
import axios from 'axios';

function InputBar({ setData }) {
    const [input, setInput] = useState('');
    const [type, setType] = useState('recommendation');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(true);

    const handleTypeChange = (newType) => {
        if (newType === type) {
            setShow(!show);
        } else {
            setType(newType);
            setInput('');
            setError(null);
            setShow(true);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setError(null);

        try {
            if (type === 'recommendation') {
                if (input.trim().startsWith('https://aeon.co/essays/')) {

                    const { data } = await axios.get(
                        `http://35.173.126.231/reccomend_with_url/?url=${input}`,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    );
                    setData(data);
                    setShow(false);
                }
                else {
                    setError("Please enter a valid Aeon URL")
                }

            } else {
                const { data } = await axios.get(
                    `http://35.173.126.231/reccomend_with_prompt?prompt=${input}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                setData(data);
                setShow(false);
            }
        } catch (err) {
            setError(err.message);
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-[80%] md:w-[50%]">
            <div className="flex flex-row justify-between w-full">
                <button
                    onClick={() => handleTypeChange('recommendation')}
                    className={`md:text-md text-sm p-2 w-[50%] transition-all duration-300
                        ${type === 'recommendation'
                            ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                            : 'border-b-2 border-gray-200 text-gray-500 hover:text-gray-700'}`}
                >
                    Recommendations
                </button>
                <button
                    onClick={() => handleTypeChange('search')}
                    className={`text-md p-4 w-[50%] transition-all duration-300
                        ${type === 'search'
                            ? 'border-b-2 border-blue-500 text-blue-500 font-medium'
                            : 'border-b-2 border-gray-200 text-gray-500 hover:text-gray-700'}`}
                >
                    Search
                </button>
            </div>
            {
                show && (
                    <div className="w-full flex flex-col gap-2 py-5">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={type === 'recommendation' ? "Paste the link here" : "Enter your prompt here"}
                            className="w-full p-3 border-2 rounded-md outline-none transition-all duration-300
                            focus:ring-2 focus:ring-blue-200
                            hover:border-gray-300
                            focus:border-blue-500
                            placeholder-gray-400"
                            disabled={isLoading}
                        />

                        {error && (
                            <div className="text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 text-white md:py-2 py-1 rounded-md
                            transition-all duration-300
                            hover:bg-blue-600 
                            active:bg-blue-700
                            disabled:bg-gray-300
                            disabled:cursor-not-allowed
                            flex items-center justify-center"
                            disabled={!input.trim() || isLoading}
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                type === 'recommendation' ? 'Get Recommendations' : 'Search'
                            )}
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default InputBar;