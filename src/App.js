import { Component } from 'react';
import { Searchbar } from './Components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './Components/ImageGallery';
import { Button } from './Components/Button';
import { Spinner } from './Components/Loader';
import { Modal } from './Components/Modal';
import style from './App.module.scss';
class App extends Component {
	state = {
		searchQuery: '',
		page: 1,
		images: [],
		status: 'idle',
		load: false,
		showModal: false,
		elementsModal: [],
	};
	componentDidUpdate(prevProps, prevState) {
		const { searchQuery, page } = this.state;
		if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
			this.restApi(searchQuery, page);
		}
	}

	restApi = (searchQuery, page) => {
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
					status: 'resolved',
					load: false,
				}));
			});
	};

	handleClick = () => {
		this.setState(prevState => ({
			page: prevState.page + 1,
			load: true,
		}));
	};

	getSearchQuery = search => {
		this.setState({
			searchQuery: search,
			page: 1,
			images: [],
			status: 'pending',
		});
	};
	clickOnImage = event => {
		const bigImg = event.target.getAttribute('data-url');
		const alt = event.target.getAttribute('alt');

		this.setState({
			showModal: true,
			elementsModal: { bigImg, alt },
		});
	};

	closeModal = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
		}));
	};

	render() {
		const { images, status, searchQuery, load, showModal, elementsModal } = this.state;
		const bth = !(images.length < 12);
		return (
			<div className={style.App}>
				<Searchbar onSubmit={this.getSearchQuery} />
				{status === 'pending' && <Spinner />}
				{status === 'rejected' && (
					<div>
						<h1>Images with the title {searchQuery} not found</h1>
					</div>
				)}

				{status === 'resolved' && (
					<>
						<ImageGallery images={images} clickImage={this.clickOnImage} />
						{bth && (
							<Button nextPage={this.handleClick} loading={load}>
								<Spinner />
							</Button>
						)}
					</>
				)}
				{showModal && (
					<Modal alt={elementsModal.alt} src={elementsModal.bigImg} onClose={this.closeModal} />
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
