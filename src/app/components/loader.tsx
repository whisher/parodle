import React from 'react';

const Loader: React.FC = () => {
	return (
		<div className="h-80 grid grid-cols-3 place-content-center place-items-center" role="status">
			<span className="relative">
				<span className="absolute h-6 w-6 top-0 -left-16 -mt-1 -mr-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400/90 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-6 w-6 bg-amber-400"></span>
				</span>
			</span>
			<span className="relative">
				<span className="absolute h-6 w-6 top-0 -left-6 -mt-1 -mr-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400/90 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-6 w-6 bg-lime-400"></span>
				</span>
			</span>
			<span className="relative">
				<span className="absolute h-6 w-6 top-0 left-4 -mt-1 -mr-1">
					<span className="animate-[ping_1s_linear_infinite] absolute inline-flex h-full w-full rounded-full bg-red-400/90 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-6 w-6 bg-red-400"></span>
				</span>
			</span>
		</div>
	);
};

export { Loader };
