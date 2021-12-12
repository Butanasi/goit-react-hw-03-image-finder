import PropTypes from 'prop-types';
import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import style from './Button.module.scss';

export class Button extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
	};
	scrollToBottom = () => {
		this.props.onClick();
		scroll.scrollToBottom();
	};

	render() {
		return (
			<button type="button" className={style.Button} onClick={this.scrollToBottom}>
				Load more
			</button>
		);
	}
}
