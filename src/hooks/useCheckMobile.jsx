// Hook used by components check whether the users' viewport is smaller.
const useCheckMobile = (value) => {
	// If trying to access the window object before it loads then the component will throw an error
	// and the page won't load.
	if (document.window !== 'undefined') {
		return window.innerWidth < value;
	}

	return false;
};

export default useCheckMobile;
