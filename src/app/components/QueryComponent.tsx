import { useState } from 'react';
import axios from 'axios';

const QueryComponent = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQuery = async () => {
        const result = await axios.post('http://localhost:8000/query', {
            query
        });
        setResponse(result.data.response);
    };

    return (
        <div className="p-4">
            <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask something about Next.js..."
                className="w-full p-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleQuery}
                className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
                Ask
            </button>
            <div className="mt-4 p-2 border border-gray-300 rounded">
                {response}
            </div>
        </div>
    );
};

export default QueryComponent;