'use client'

import QueryComponent from './components/QueryComponent';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Nextbot</h1>
            <QueryComponent />
        </div>
    );
};

export default HomePage;