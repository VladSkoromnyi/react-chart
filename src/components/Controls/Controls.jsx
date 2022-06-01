export const Controls = ({ 
	chartData,
	setChartData,
}) => {

  return (
		<div className="Controls">
			<ul className="Controls__list">
				{chartData.map(item => {
					return (
						<li key={item.id}>

						</li>
					);
				})}
			</ul>
		</div>
	);
};