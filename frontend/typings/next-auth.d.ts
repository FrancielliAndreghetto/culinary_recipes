import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		token;
		user: {
			id: string
			email: string
			name: string
			admin: boolean
		}
	}
}