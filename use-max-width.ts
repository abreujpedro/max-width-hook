import React from 'react';

const verifyMaxWidth = (maxWidth: number) => {
	if (typeof window === 'undefined') {
		return null;
	}

	return window?.innerWidth ? window.innerWidth <= maxWidth : null;
};

const useMaxWidth = (maxWidth: number) => {
	const [match, setMatch] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		function changeMatch() {
			setMatch(verifyMaxWidth(maxWidth));
		}
		changeMatch();
		window.addEventListener('resize', changeMatch);
		return () => {
			window.removeEventListener('resize', changeMatch);
		};
	}, [match, maxWidth]);
	return match;
};

export default useMaxWidth;