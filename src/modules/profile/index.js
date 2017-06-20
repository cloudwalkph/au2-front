import React, {Component} from 'react';
import './styles.css';
import axios from 'axios';
import moment from 'moment';
import appConfig from '../../config';

let $ = window.jQuery;

class profile extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			imgSrc : 'images/smiley.jpeg',
			first_name : '',
			middle_name : '',
			last_name : '',
			email : '',
			contact_number : '',
			gender : '',
			driver_license : '',
			driver_license_date : moment().format('YYYY-MM-DD'),
			city : '',
			country : '',
			address : ''
		}
	}
	

	handleSaveProfile = () => {
		
	}

	getProfileDate = () => {
		let url = appConfig.apiUrl + '1';
		
		axios.get(url).then((response) => {
			
			this.setState({
				first_name : response.data.first_name,	
				last_name : response.data.last_name,	
				middle_name : response.data.middle_name,	
				email : response.data.email,	
				gender : response.data.gender,	
				driver_license : response.data.driver_license,	
				driver_license_date : response.data.driver_license_expiration,	
				city : response.data.user_address.city,	
				country : response.data.user_address.country,	
				address : response.data.user_address.address
			});
		}).catch((error)=> {
			console.log(error);
		});
	}

	handleOnSubmitForm = (e) => {
		e.preventDefault();
		let form = new FormData($(e.target)[0]);
		let file = document.getElementById('imageUpload');
		
		form.append('file', file.files[0]);

		// for (var pair of other.entries()) {
  //           console.log(pair[0],'>>>',pair[1]); 
  //       }
		// return;
		let url = appConfig.apiUrl + '1';

		axios.post(url, form).then((response) => {
			console.log(response)
		}).catch((error)=> {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getProfileDate();

		/*var dialog = document.querySelector('dialog');
		var showDialogButton = document.querySelector('#show-dialog');
		if (! dialog.showModal) {
		  // dialogPolyfill.registerDialog(dialog);
		}
		showDialogButton.addEventListener('click', function() {
		  dialog.showModal();
		});
		dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });*/
	}

	handleOnChangeFile = (e) => {
		let files = e.target.files;

        // Loop through the FileList and render image files as thumbnails.
        for (let i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }
            let reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = ((theFile) => {
                return (e) => {
                    // pass the result to img tag

					this.setState({
						imgSrc : e.target.result
					});
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
	}

	render() {
		return (
			<div className="mdl-grid">
				<div className="mdl-cell--2-offset mdl-cell mdl-cell--8-col">
					<div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
						<div className="mdl-card__title">
							<div className="mdl-cell mdl-cell--4-col">
								<span className="fileinput-holder">
									<input type="file" accept="image/*" id="imageUpload" name="image" className="fileinput-hidden-button" onChange={this.handleOnChangeFile}/>
									<img alt="" id="show-dialog" src={this.state.imgSrc} style={{width:'100%',cursor: 'pointer'}}/>
								</span>
							</div>
							<div className="mdl-cell mdl-cell--8-col">
								<div className="mdl-layout-spacer"></div>
								<h2 className="mdl-card__title-tex" style={{textAlign: 'right'}}>My Profile</h2>
							</div>
						</div>
						<div className="mdl-card__supporting-text">
							<form id="profileForm" onSubmit={this.handleOnSubmitForm}>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label is-focused"> 
								
									<input className="mdl-textfield__input" type="text" name="first_name" value={this.state.first_name} onChange={(e) => {this.setState({first_name : e.target.value})}}/>
									<label className="mdl-textfield__label" htmlFor="sample2">First Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label is-dirty">
									<input className="mdl-textfield__input" type="text" name="middle_name" value={this.state.middle_name} onChange={(e) => {this.setState({middle_name : e.target.value})}}/>
									<label className="mdl-textfield__label" htmlFor="sample2">Middle Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label is-dirty">
									<input className="mdl-textfield__input" type="text" name="last_name" value={this.state.last_name} onChange={(e) => {this.setState({last_name : e.target.value})}}/>
									<label className="mdl-textfield__label" htmlFor="sample2">Last Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label is-dirty">
									<input className="mdl-textfield__input" name="email" type="text" value={this.state.email} onChange={(e) => {this.setState({email : e.target.value})}}/>
									<label className="mdl-textfield__label" htmlFor="sample2">Email Address</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="text" name="contact_number" pattern="[0-9,0-9]*"/>
									<label className="mdl-textfield__label" htmlFor="sample2">Mobile Number</label>
									<span className="mdl-textfield__error">Numbers only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<select className="mdl-textfield__input" name="gender" value={this.state.gender} onChange={(e) => {this.setState({gender : e.target.value})}}>
										<option value="0">Female</option>
										<option value="1">Male</option>
									</select>
									<label className="mdl-textfield__label" htmlFor="sample2">Gender</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="text" name="driver_license" value={this.state.driver_license} onChange={(e) => {this.setState({driver_license : e.target.value})}}/>
									<label className="mdl-textfield__label" htmlFor="sample2">Drivel license</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="date" name="driver_license_date" value={this.state.driver_license_date} onChange={(e) => {this.setState({driver_license_date : e.target.value})}} />
									<label className="mdl-textfield__label" htmlFor="sample2">Driver License Expiry</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="text" name="city" value={this.state.city} onChange={(e) => {this.setState({city : e.target.value})}} />
									<label className="mdl-textfield__label" htmlFor="sample2">City</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="text" name="country" value={this.state.country} onChange={(e) => {this.setState({country : e.target.value})}} />
									<label className="mdl-textfield__label" htmlFor="sample2">Country</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="password" name="password" />
									<label className="mdl-textfield__label" htmlFor="sample2">Password</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-textfield--floating-label">
									<input className="mdl-textfield__input" type="password" />
									<label className="mdl-textfield__label" htmlFor="sample2">Re-Type Password</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--12-col mdl-textfield--floating-label">
									<textarea className="mdl-textfield__input" type="text" rows= "3" id="sample5" name="address" value={this.state.address} onChange={(e) => {this.setState({address : e.target.value})}}></textarea>
									<label className="mdl-textfield__label" htmlFor="sample2">Address</label>
								</div>
								<button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
									>
									Save
								</button>
							</form>
						</div>
					</div>
				</div>

				{/*<dialog className="mdl-dialog mdl-cell--4-col">
					<h4 className="mdl-dialog__title">Allow data collection?</h4>
					<div className="mdl-dialog__content">
						<p>
							Allowing us to collect data will let us get you the information you want faster.
						</p>
					</div>
					<div className="mdl-dialog__actions">
						<button type="button" className="mdl-button">Agree</button>
						<button type="button" className="mdl-button close">Disagree</button>
					</div>
				</dialog>*/}
			</div>
		)
	}
}

export default profile;