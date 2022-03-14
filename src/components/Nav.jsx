import React, { useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setSearchOpen } from './../slices/brewerySlice';

// React router
import { Link } from 'react-router-dom';

// Components
import Search from './SearchInput';

import { ReactComponent as SearchIcon } from './../assets/icons/search.svg';

const Nav = () => {
	const dispatch = useDispatch();
	// const [searchOpen, setSearchOpen] = useState(false);

	function toggleSearch(searchOpen) {
		dispatch(setSearchOpen({ searchOpen }));
	}

	const searchOpen = useSelector((state) => state.brewery.searchOpen);

	return (
		<nav className="navbar">
			<div className="navbar__links">
				<Link to="/" className="navbar-brand">
					Nick's
				</Link>
			</div>

			<div className="navbar__search">
				<a
					href="#"
					onClick={() => toggleSearch(true)}
					className="navbar__search__button"
				>
					<SearchIcon />
				</a>

				<Search searchOpen={searchOpen} setSearchOpen={toggleSearch} />
			</div>
		</nav>
	);
};

export default Nav;
