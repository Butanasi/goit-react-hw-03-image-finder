(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3__zm",Image:"ImageGalleryItem_Image__1aGPr"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__34n8D",Modal:"Modal_Modal__1SC9O"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2_IIY"}},15:function(e,t,a){e.exports={Button:"Button_Button__3WUZk"}},17:function(e,t,a){e.exports={Spinner:"Loader_Spinner__JMmHO"}},18:function(e,t,a){e.exports={App:"App_App__1TgrI"}},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=(a(23),a(13)),l=a(4),i=a(5),u=a(7),h=a(6),d=a(9),m=a(8),g=a.n(m),p=a(1),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;""!==a.trim()?(e.props.onSubmit(a.toLowerCase()),e.reset()):d.b.warn("please enter name images",{theme:"colored"})},e.reset=function(){e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(p.jsx)("span",{className:g.a.SearchFormButtonLabel})}),Object(p.jsx)("input",{className:g.a.Input,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.searchQuery,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),a}(n.Component),j=(a(25),a(11)),f=a.n(j),O=function(e){var t=e.tags,a=e.src,n=e.imageClick,r=e.largeImageURL;return Object(p.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:a,alt:t,"data-url":r,onClick:n,className:f.a.Image})})},y=a(14),v=a.n(y),_=function(e){var t=e.images,a=e.clickImage;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:v.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(p.jsx)(O,{src:n,largeImageURL:r,imageClick:a,tags:c},t)}))})})},x=a(15),S=a.n(x),I=function(e){var t=e.nextPage,a=e.loading,n=e.children;return Object(p.jsxs)("button",{type:"button",className:S.a.Button,onClick:t,disabled:a,children:[a&&Object(p.jsx)("span",{children:n}),!a&&Object(p.jsx)("span",{children:"Load more"})]})},k=(a(26),a(16)),w=a.n(k),M=a(17),C=a.n(M),N=function(){return Object(p.jsx)("div",{className:C.a.Spinner,children:Object(p.jsx)(w.a,{type:"Puff",color:"maroon",height:30,width:30})})},F=a(12),L=a.n(F),B=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeModal=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(p.jsx)("div",{className:L.a.Overlay,onClick:this.handleClick,children:Object(p.jsx)("div",{className:L.a.Modal,children:Object(p.jsx)("img",{src:t,alt:a})})}),B)}}]),a}(n.Component),Q=a(18),A=a.n(Q),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,images:[],status:"idle",load:!1,showModal:!1,elementsModal:[]},e.restApi=function(t,a){fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=24073340-1ef2f625ad6fbbc63b84a3aaa&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){var a=t.hits;0!==a.length?e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),status:"resolved",load:!1}})):e.setState({status:"rejected"})}))},e.handleClick=function(){e.setState((function(e){return{page:e.page+=1,load:!0}}))},e.getSearchQuery=function(t){e.setState({searchQuery:t,page:1,images:[],status:"pending"})},e.clickOnImage=function(t){if(t.preventDefault(),"IMG"===t.target.nodeName){var a=t.target.getAttribute("data-url"),n=t.target.getAttribute("alt");e.setState({showModal:!0,elementsModal:{bigImg:a,alt:n}})}},e.closeModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.searchQuery,r=a.page;t.searchQuery===n&&t.page===r||this.restApi(n,r)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.searchQuery,r=e.load,c=e.showModal,o=e.elementsModal,s=!(t.length<12);return Object(p.jsxs)("div",{className:A.a.App,children:[Object(p.jsx)(b,{onSubmit:this.getSearchQuery}),"pending"===a&&Object(p.jsx)(N,{}),"rejected"===a&&Object(p.jsx)("div",{children:Object(p.jsxs)("h1",{children:["Images with the title ",n," not found"]})}),"resolved"===a&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{images:t,clickImage:this.clickOnImage}),s&&Object(p.jsx)(I,{nextPage:this.handleClick,loading:r,children:Object(p.jsx)(N,{})})]}),c&&Object(p.jsx)(G,{alt:o.alt,src:o.bigImg,onClose:this.closeModal}),Object(p.jsx)(d.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1})]})}}]),a}(n.Component),P=U;o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2f53s",SearchForm:"Searchbar_SearchForm__1xu6s",SearchFormButton:"Searchbar_SearchFormButton__z1K8g",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8kMYv",Input:"Searchbar_Input__3VGUM"}}},[[47,1,2]]]);
//# sourceMappingURL=main.976bc790.chunk.js.map