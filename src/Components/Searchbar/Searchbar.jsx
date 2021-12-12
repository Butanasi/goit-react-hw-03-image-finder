import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import style from './Searchbar.module.scss';
export class Searchbar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	state = {
		searchQuery: '',
	};

	handleInputChange = event => {
		this.setState({ searchQuery: event.currentTarget.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		const { searchQuery } = this.state;
		if (searchQuery.trim() === '') {
			toast.warn('please enter name images', {
				theme: 'colored',
			});
			return;
		}
		this.props.onSubmit(searchQuery.toLowerCase());
		this.reset();
	};

	reset = () => {
		this.setState({ searchQuery: '' });
	};
	render() {
		return (
			<header className={style.Searchbar}>
				<form className={style.SearchForm} onSubmit={this.handleSubmit}>
					<button type="submit" className={style.SearchFormButton}>
						<span className={style.SearchFormButtonLabel}></span>
					</button>

					<input
						className={style.Input}
						type="text"
						autoComplete="off"
						autoFocus
						value={this.state.searchQuery}
						placeholder="Search images and photos"
						onChange={this.handleInputChange}
					/>
				</form>
			</header>
		);
	}
}
