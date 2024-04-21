import NewUserForm from './components/NewUserForm';
import UserList from './components/UserList';

const Home = () => {
	return (
		<div>
			<h1 className="text-gray-800">USER REGISTRATION</h1>
			<NewUserForm />
			<UserList />
		</div>
	);
};

export default Home;
