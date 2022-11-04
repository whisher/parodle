import { useState } from 'react';
import html2canvas from 'html2canvas';

/**
 * @module Main_Hook
 * Hook return
 * @typedef {Array} HookReturn
 * @property {string} HookReturn[0] - image string
 * @property {string} HookReturn[1] - take screen shot string
 * @property {object} HookReturn[2] - errors
 */

/**
 * hook for creating screenshot from html node
 * @returns {HookReturn}
 */
export type ScreenshotParams = { type: 'image/png'; quality: number };
const useScreenshot = ({ type, quality }: ScreenshotParams) => {
	const [image, setImage] = useState<null | string>(null);
	const [error, setError] = useState<unknown>();
	/**
	 * convert html node to image
	 * @param {HTMLElement} node
	 */
	const takeScreenShot = async (node: HTMLElement | null) => {
		if (!node) {
			throw new Error('You should provide correct html node.');
		}
		try {
			const canvas = await html2canvas(node);
			const croppedCanvas = document.createElement('canvas');
			const croppedCanvasContext = croppedCanvas.getContext('2d');
			const cropPositionTop = 0;
			const cropPositionLeft = 0;
			const cropWidth = canvas.width;
			const cropHeight = canvas.height;
			croppedCanvas.width = cropWidth;
			croppedCanvas.height = cropHeight;
			croppedCanvasContext?.drawImage(canvas, cropPositionLeft, cropPositionTop);
			const base64Image = croppedCanvas.toDataURL(type, quality);
			setImage(base64Image);
		} catch (error) {
			console.error(error);
			setError(error);
		}
	};

	return {
		image,
		takeScreenShot,
		setImage,
		error
	};
};

export { useScreenshot };

/**onclone: function (documentClone) {
					const h1 = document.createElement('h1');
					h1.className =
						'uppercase text-5xl lg:text-7xl font-bold text-center text-gradient bg-gradient-to-r from-lime-400 via-indigo-400 to-pink-400';
					const text = document.createTextNode('Parodle');
					h1.appendChild(text);
					documentClone.insertBefore(h1, documentClone.children[0]);
				} */
