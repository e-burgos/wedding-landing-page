import React, { Fragment } from "react";
import Countdown from "react-countdown-now";
import { counterSection } from "../../data/counterSection";

const CountdownComponent = () => {
	const Completionist = () => (
		<div className='container'>
			<div className='countdown'>
				<div className='content big'>
					<img
						src={counterSection.icons.gif}
						alt='icon'
						width={200}
					/>
					<span className='title big-title'>Hoy Nos Casamos!</span>
				</div>
				<div className='gold-border big' />
			</div>
		</div>
	);

	interface Props {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		completed: boolean;
	}

	const renderer: React.FunctionComponent<Props> = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}) => {
		if (completed) {
			return <Completionist />;
		} else {
			return (
				<div className='countdown-list wrap'>
					<div className='container'>
						<div className='countdown'>
							<div className='content'>
								<span className='digits'>{days}</span>
								<span className='title'>Días</span>
							</div>
							<div className='gold-border' />
						</div>
					</div>
					<div className='container'>
						<div className='countdown'>
							<div className='content'>
								<span className='digits'>{hours}</span>
								<span className='title'>Horas</span>
							</div>
							<div className='gold-border' />
						</div>
					</div>
					<div className='container'>
						<div className='countdown'>
							<div className='content'>
								<span className='digits'>{minutes}</span>
								<span className='title'>Minutos</span>
							</div>
							<div className='gold-border' />
						</div>
					</div>
					<div className='container'>
						<div className='countdown'>
							<div className='content'>
								<span className='digits'>{seconds}</span>
								<span className='title'>Segundos</span>
							</div>
							<div className='gold-border' />
						</div>
					</div>
				</div>
			);
		}
	};

	let d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth();
	let day = d.getDate();
	let coundown = new Date(year, month, day + 173).getTime();

	return (
		<Fragment>
			<Countdown date={coundown} renderer={renderer} />
		</Fragment>
	);
};

export default CountdownComponent;
