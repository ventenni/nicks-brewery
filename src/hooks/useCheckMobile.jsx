// import React, { useState } from 'react';

const useCheckMobile = (value) => {
	if (document.window !== 'undefined') {
		return window.innerWidth < value;
	}

	return false;
};

export default useCheckMobile;
