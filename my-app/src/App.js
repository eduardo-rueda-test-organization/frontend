import { useState } from "react";


async function sendQuery(contents) {
	return fetch(`https://foreign-lena-eduardo-rueda-de-santiago-a06d94fa.koyeb.app${contents}`);
}

function App() {

	const [serverAnswer, setServerAnswer] = useState("");

	const askServer = (parameter) => {
		sendQuery(parameter).then((result) => {
			setServerAnswer(result);
		})
	}

	return (
		<div>
			<p>The server says {serverAnswer}</p>
			<button onClick={() => askServer("/")}>/</button>
			<button onClick={() => askServer("/home")}>/home</button>
			<button onClick={() => askServer("/test")}>/test</button>
			<button onClick={() => askServer("/user")}>/user</button>
		</div>
	);
}

export default App;
