import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.scss';
import { ABOUT } from '../../../constants/routes';

class Home extends Component {
	render() {
		return (
			<div className={styles.home}>
				Home - <Link to={ABOUT}>IR a about</Link>
			</div>
		)
	}
}

export default Home;