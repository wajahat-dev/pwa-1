


export default function swDev(){
	let swUrl = `${process.env.PUBLIC_URL}/sw.js`

	navigator.serviceWorker.register(swUrl).then((response)=>{
		console.log('Hooray I got some response !!',response)
	}).catch((e)=>{
		console.log("Hey! i am facing some errors!! ",e)
	})
}