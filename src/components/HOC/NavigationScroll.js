import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

// ===========================|| NAVIGATION SCROLL TO TOP ||=========================== //

const NavigationScroll = ({ children }) => {
	// const location = useLocation();
	const { path, url } = useRouteMatch();
	//const { pathname } = location;
	console.log(path)
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}, [path]);

	return children || null;
};

NavigationScroll.propTypes = {
	children: PropTypes.node,
	location: PropTypes.object
};

export default NavigationScroll;