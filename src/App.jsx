import { useGlobalContext } from './index';

const App = () => {
	const { name, setName } = useGlobalContext();
	return (
		<>
			<h1>{name.toUpperCase()}</h1>

			<button type='button' onClick={() => setName('Mel')}>Click me!</button>
		</>
	);
};
export default App;
