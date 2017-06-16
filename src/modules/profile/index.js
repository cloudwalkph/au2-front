import React, {Component} from 'react';
import './styles.css';

class profile extends Component {

	state = {
		imgSrc : 'images/smiley.jpeg'
	}

	componentDidMount() {
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
        for (var i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }
            var reader = new FileReader();

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
									<input type="file" accept="image/*" className="fileinput-hidden-button" onChange={this.handleOnChangeFile}/>
									<img alt="" id="show-dialog" src={this.state.imgSrc} style={{width:'100%',cursor: 'pointer'}}/>
								</span>
							</div>
							<div className="mdl-cell mdl-cell--8-col">
								<div className="mdl-layout-spacer"></div>
								<h2 className="mdl-card__title-tex" style={{textAlign: 'right'}}>My Profile</h2>
							</div>
						</div>
						<div className="mdl-card__supporting-text">
							<form action="#">
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*"/>
									<label className="mdl-textfield__label" htmlFor="sample2">First Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*"/>
									<label className="mdl-textfield__label" htmlFor="sample2">Middle Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*"/>
									<label className="mdl-textfield__label" htmlFor="sample2">Last Name</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text"/>
									<label className="mdl-textfield__label" htmlFor="sample2">Email Address</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" pattern="[A-Z,a-z]*"/>
									<label className="mdl-textfield__label" htmlFor="sample2">Landline Number</label>
									<span className="mdl-textfield__error">Numbers only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<select className="mdl-textfield__input">
										<option value="0">Female</option>
										<option value="1">Male</option>
									</select>
									<label className="mdl-textfield__label" htmlFor="sample2">Gender</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" />
									<label className="mdl-textfield__label" htmlFor="sample2">Drivel license</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" />
									<label className="mdl-textfield__label" htmlFor="sample2">Driver License Expiry</label>
									<span className="mdl-textfield__error">Letters only</span>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" />
									<label className="mdl-textfield__label" htmlFor="sample2">City</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="text" />
									<label className="mdl-textfield__label" htmlFor="sample2">Country</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="password" />
									<label className="mdl-textfield__label" htmlFor="sample2">Password</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col">
									<input className="mdl-textfield__input" type="password" />
									<label className="mdl-textfield__label" htmlFor="sample2">Re-Type Password</label>
								</div>
								<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--12-col">
									<textarea className="mdl-textfield__input" type="text" rows= "3" id="sample5" ></textarea>
									<label className="mdl-textfield__label" htmlFor="sample2">Address</label>
								</div>
								<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
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