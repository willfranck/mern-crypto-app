function HeroCard() {
	return (
		<section className="hero-card">
			<div className="hero-title">
				<h1>Live Crypto Values</h1>
				<p>a MERN Stack demo</p>
				<h3>MongoDB &ensp;|&ensp; ExpressJS &ensp;|&ensp; ReactJS &ensp;|&ensp; NodeJS</h3>
			</div>
			<div className="hero-features">
				<span>also implementing:&ensp;</span>
				<h3>Mongoose &ensp;|&ensp; Axios &ensp;|&ensp; RapidAPI</h3>
			</div>
			<div>
				<h3>Current Status:</h3>
				<ul>
					<li>Frontend conducting API fetch every 30s</li>
					<li>Backend server and MongoDB configured</li>
					<li>Currently configuring server side API fetch</li>
				</ul>
			</div>
		</section>
	)
}

export default HeroCard
