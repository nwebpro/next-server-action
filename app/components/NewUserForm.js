import { addUser } from '@/actions/user';
import Button from './Button';

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
				<Button />
			</div>
		</form>
	);
};

export default NewUserForm;
