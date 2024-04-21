import { getUsers } from '@/actions/user';

const UserList = async () => {
	const users = await getUsers();
	return (
		<div className="box-secondary mt-10">
			<h2 className="text-gray-800">User List</h2>
			{users.length > 0 ? (
				<div className="box-2">
					{users.map((user) => (
						<div key={user.id} className='flex items-center gap-5'>
							<h3>{user.name}</h3>
							<p>{user.email}</p>
						</div>
					))}
				</div>
			) : (
				<div className="box-1">No user found!</div>
			)}
		</div>
	);
};

export default UserList;
