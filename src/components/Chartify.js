import React,{useState,useEffect} from 'react';
import {Line} from "react-chartjs-2";
import axios from "axios";

const Chartify = () =>{

	const [charData,setChartData] = useState({})
	const [employS, setS] = useState([])
	const [employAge, setAge] = useState([])
	
	
	const Chart = () => {
		let country = [];
		let death = [];

		axios.get('https://covid19-api.org/api/status').
		then((res)=>{
			
				for(const obj of res.data){
					country.push(obj.country)
				death.push(parseInt(obj.deaths))
				}
			
			setChartData({
			labels: country,
			datasets: [{
				label: "level of thiccness",
				data: death,
				backgroundColor:[
				'rgba(74,43,34,0.4)'
				],
				borderWidth: 2,
			}]
		}) 
			console.log("=========> Result! ",res)
			localStorage.setItem("data",JSON.stringify(res.data.country))
		
		}).
		catch((e)=>{
			// alert('catch block')
			let getDat = localStorage.getItem("data")
			setChartData(getDat)
			console.log("=========> ERROR!",e)
		})
		
		console.log(" country ==  " ,country)
		console.log(" death  == ",death)
	}
	useEffect(()=>{
		Chart()
	},[])
	
	return (
		<div className="App">
		<div className="container">
		<Line data={charData} options={
			{
				responsive: true
			}
		}></Line>
		</div>
		</div>);
}


export default Chartify;