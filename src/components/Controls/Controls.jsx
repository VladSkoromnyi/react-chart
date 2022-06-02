import { useState } from "react";
import { FormEdit } from "../FormEdit/FormEdit";
import './Controls.scss';

export const Controls = ({ 
	data,
	setData,
}) => {
	const [currentBarId, setCurrentBarId] = useState(0);
	const [currentBarLabel, setCurrentBarLabel] = useState('');
	const [currentBarGain, setCurrentBarGain] = useState(0);

	const [isShowForm, setIsShowForm] = useState(false)

	const handleEdit = ({
		id,
		mounth,
		gain,
	}) => {
		setCurrentBarId(id);
		setCurrentBarLabel(mounth);
		setCurrentBarGain(gain);
		setIsShowForm(true);
	}

	const handleDelete = (id) => {
		setData(prevState => (
			prevState.filter(item => item.id !== id)
		))
	}

  return (
		<>
		{isShowForm && (
			<FormEdit
				setData={setData}
				currentBarId={currentBarId}
				currentBarLabel={currentBarLabel}
				currentBarGain={currentBarGain}
				setCurrentBarId={setCurrentBarId}
				setCurrentBarLabel={setCurrentBarLabel}
				setCurrentBarGain={setCurrentBarGain}
				setIsShowForm={setIsShowForm}
			/>			
		)}

		<div className="Controls">
			<table className="Controls__table">
				<thead className="Controls__thead">
					<tr className="Controls__thead-line">
						<td className="Controls__thead-cell">
							#
						</td>
						<td className="Controls__thead-cell">
							Lable:
						</td>
						<td className="Controls__thead-cell">
							Gain:
						</td>
						<td className="Controls__thead-cell">
							Change:
						</td>
						<td className="Controls__thead-cell">
							Delete:
						</td>
					</tr>
				</thead>
				<tbody>
					{data && data.map((item, i) => (
						<tr 
							key={item.id}
							className="Controls__line"
						>
							<td	className="Controls__cell">
								<span>
									{i + 1}
								</span>
							</td>

							<td	className="Controls__cell">
								<span>
									{item.mounth}
								</span>
							</td>

							<td	className="Controls__cell">
								<span>
									{item.gain}
								</span>
							</td>

							<td	className="Controls__cell">
								<button
									className="App__button edit"
									onClick={() => handleEdit(item)}
								>
									Edit
								</button>
							</td>

							<td	className="Controls__cell">
								<button
									className="App__button delete"
									onClick={() => handleDelete(item.id)}
								>
									X
								</button>
							</td>			
						</tr>
					))}						
				</tbody>
			</table>
		</div>		
		</>
	);
};