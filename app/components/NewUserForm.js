import { addUser } from '@/actions/user';

const NewUserForm = () => {
	const addUserWithFlag = addUser.bind(null, 'pro');

	return (
		<form action={addUserWithFlag}>
			<div>
				<input type="text" name="name" placeholder="Name" />
			</div>
			<div>
				<input type="email" name="email" placeholder="Email" />
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default NewUserForm;
