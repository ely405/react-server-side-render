import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './About.scss';

import { HOME } from '../../../constants/routes';

class About extends Component {
	render() {
		return (
			<div className={styles.about}>
				about
				<Link to={HOME}>IR a home</Link>
			</div>
		)
	}
}

export default About;