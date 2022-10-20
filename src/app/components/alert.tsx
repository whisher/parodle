import React from 'react';

const Alert: React.FC = () => {
	return (
		<div className="px-8 py-6 rounded bg-red-100 border border-red-400 text-red-700" role="alert">
			<strong className="font-bold">Error:</strong>
			<span className="block">Something seriously bad happened.</span>
		</div>
	);
};

export { Alert };
