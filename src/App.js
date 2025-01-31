import { useState } from "react";


async function sendQuery(contents) {
	return fetch(`https://foreign-lena-eduardo-rueda-de-santiago-a06d94fa.koyeb.app${contents}`);
}

function App() {

	const [serverAnswer, setServerAnswer] = useState("");

	const askServer = (parameter) => {
		sendQuery(parameter).then((result) => {
			const text = result.text();
			text.then((plainText) => {
				setServerAnswer(plainText);
			})
		})
	}

	return (
		<div>
			<h1>Deno is installed!</h1>
			<p>The server says {serverAnswer}</p>
			<button onClick={() => askServer("/")}>/</button>
			<button onClick={() => askServer("/home")}>/home</button>
			<button onClick={() => askServer("/test")}>/test</button>
			<button onClick={() => askServer("/user")}>/user</button>
			<button onClick={() => askServer("/render")}>/render</button>
		</div>
	);
}

export default App;
