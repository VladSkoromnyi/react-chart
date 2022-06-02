import { useState } from 'react';

export const AddPoint = ({
	dataLength,
	setData,
	setIsShowAddForm,
}) => {
	const [newLabel, setNewLabel] = useState('');
	const [newGain, setNewGain] = useState(0);

	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const validate = (value) => (
		value.length ? true : false
	)

	const handlerAdd = (event) => {
		event.preventDefault();

		if (!validate(newLabel)) {
			setIsError(true);
			setErrorMessage('Please fill out this field');

			return;
		}

		setData((prevState) => (
				[
					...prevState,
					{
						id: dataLength + 1,
						mounth: newLabel,
						gain: newGain,
					}
				]
		))

		setNewLabel('');
		setNewGain(0);
		setIsShowAddForm(false);
	}

	return (
		<>
			<div className="blur">
				{/* blur */}
			</div>

			<form
				className="App__form"
				onSubmit={(event) => handlerAdd(event)}
			>
				<label>
					<p>Label:</p>
					<input 
						className="App__input"
						type="text"
						value={newLabel}
						onChange={({ target }) => setNewLabel(target.value)}
					/>	
					<p className="App__form-error">{isError && errorMessage}</p>
				</label>

				<label>
					<p>Gain:</p>
					<input
						className="App__input" 
						type="number" 
						value={newGain}
						onChange={({ target }) => setNewGain(target.value)}
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
						onClick={() => setIsShowAddForm(false)}
					>
						Cancel
					</button>				
				</div>
			</form>
		</>
	);
}