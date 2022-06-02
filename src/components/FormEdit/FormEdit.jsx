import { useState } from "react";

export const FormEdit = ({
	setData,
	currentBarId,
	currentBarLabel,
	currentBarGain,
	setCurrentBarId,
	setCurrentBarLabel,
	setCurrentBarGain,
	setIsShowForm,
}) => {

	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const validate = (value) => (
		value.length ? true : false
	)

	const handlerSubmit = (event) => {
		event.preventDefault();

		if (!validate(currentBarLabel)) {
			setIsError(true);
			setErrorMessage('Please fill out this field');

			return;
		}

		setData((prevState) => {
			return prevState.map(item => {
				if (item.id === currentBarId) {
					return {
						id: item.id,
						mounth: currentBarLabel,
						gain: currentBarGain,
					};
				}

				return item;
				})}
			)
			
		setCurrentBarId(0);
		setCurrentBarLabel('');
		setCurrentBarGain(0);
		setIsShowForm(false);
	}

	return (
		<>
			<div className="blur">
				{/* blur */}
			</div>

			<form
				className="App__form"
				onSubmit={(event) => handlerSubmit(event)}
			>
			<label>
				<p>Label:</p>
				<input 
					className="App__input"
					type="text"
					value={currentBarLabel}
					onChange={({target}) => setCurrentBarLabel(target.value)}
				/>
				<p className="App__form-error">{isError && errorMessage}</p>
			</label>

			<label>
				<p>Gain:</p>
				<input 
					className="App__input"
					type="number" 
					value={currentBarGain}
					onChange={({target}) => setCurrentBarGain(target.value)}
				/>
			</label>

				<div className="form-buttons">
					<button
						className="App__button edit"
					>
						Save
					</button>

					<button
						className="App__button delete"
						onClick={() => setIsShowForm(false)}
					>
						Cancel
					</button>					
				</div>


			</form>		
		</>

	)
}
