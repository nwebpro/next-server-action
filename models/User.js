import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'user',
		required: true,
	},
	email: {
		type: String,
		default: 'user@example.com',
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please fill a valid email address',
		],
		required: true,
	},
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
