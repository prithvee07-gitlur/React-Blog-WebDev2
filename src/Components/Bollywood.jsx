import Data from "../Data"

const Bollywood = () => {
	const BollywoodData = Data.filter((item) => item.category === "Bollywood")

	return (
		<div>
			<h1>Bollywood</h1>
			{BollywoodData.map((Bollydata) => (
				<div key={Bollydata.id}>
					<h1>{Bollydata.title}</h1>
					<img src={Bollydata.img_url} alt={Bollydata.title} />
				</div>
			))}
		</div>
	)
}

export default Bollywood
