'use server';

import connectMongo from '@/dbConnect/connectMongo';
import User from '@/models/User';
import { revalidatePath } from 'next/cache';

export const addUser = async (flag, formData) => {
	const name = formData.get('name');
	const email = formData.get('email');
	const userData = {
		name,
		email,
	};

	console.log(flag);

	try {
		await connectMongo();
		// inter into database
		await new User(userData).save();

		// revalidate user
		revalidatePath('/');
	} catch (error) {
		console.log(error);
	}
};

export const getUsers = async () => {
	try {
		await connectMongo();
		// inter into database
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
	}
};
