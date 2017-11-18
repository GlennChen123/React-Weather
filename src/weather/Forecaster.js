import React from 'react';

function DailyItemC(props) {
	const day = props.day;
	return (
		<div className="item">
			<span>{day.weekday}</span>
			<span><img src={day.icon} /></span>
			<span >{day.high.celsius}</span>
			<span >{day.low.celsius}</span>
			<span> {day.avghumidity}</span>
		</div>
	)
}

function DailyItemF(props) {
	const day = props.day;
	return (
		<div className="item">
			<span>{day.weekday}</span>
			<span><img src={day.icon} /></span>
			<span >{day.high.fahrenheit}</span>
			<span >{day.low.fahrenheit}</span>
			<span> {day.avghumidity}</span>
		</div>
	)
}
	


export default function Forecaster(props) {
	if (props.unit =="C"){
		return props.days.map(
			(day, i) => <DailyItemC key={`${day.weekday}_${i}`} day={day} />
		)
	}else{
		return props.days.map(
			(day, i) => <DailyItemF key={`${day.weekday}_${i}`} day={day} />
		)

	}
}