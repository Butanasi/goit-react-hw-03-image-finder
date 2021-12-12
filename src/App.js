import { Component } from 'react';
import { Searchbar } from './Components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './Components/ImageGallery';
import { Button } from './Components/Button';
import { Loader } from './Components/Loader';
import style from './App.module.scss';

class App extends Component {
	state = {
		searchQuery: '',
		page: 1,
		images: [],
		status: 'idle',
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery) {
			this.setState({ images: [] });
			this.restApi();
		}
	}

	restApi = () => {
		const { searchQuery, page } = this.state;
		fetch(
			`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=24073340-1ef2f625ad6fbbc63b84a3aaa&image_type=photo&orientation=horizontal&per_page=12`,
		)
			.then(response => response.json())
			.then(({ hits }) => {
				if (hits.length === 0) {
					this.setState({ status: 'rejected' });
					return;
				}

				this.setState(prevState => ({
					images: [...prevState.images, ...hits],
					page: prevState.page + 1,
					status: 'resolved',
				}));
			});
	};

	getSearchQuery = search => {
		this.setState({
			searchQuery: search,
			page: 1,
			images: [],
			status: 'pending',
		});
	};

	render() {
		const { images, status, searchQuery } = this.state;
		const bth = !(images.length < 12);
		return (
			<div className={style.App}>
				<Searchbar onSubmit={this.getSearchQuery} />

				{status === 'pending' && <Loader />}

				{status === 'rejected' && (
					<div>
						<h1>Images with the title {searchQuery} not found</h1>
					</div>
				)}

				{status === 'resolved' && (
					<>
						<ImageGallery images={images} />
						{bth && <Button onClick={this.restApi} />}
					</>
				)}

				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
				/>
			</div>
		);
	}
}

export default App;
