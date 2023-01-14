import { createServer } from 'miragejs';

// eslint-disable-next-line
export const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUxMTRjMDBhNTAxZTU0M2MzNjQ0ZGU3In0sImlhdCI6MTY3MzMwNDUwMywiZXhwIjoxNjc1ODk2NTAzfQ.MLa2ZTl0sOVHZ2tZGziV4X3qaToonMdj4Mvo8NHd1_4' };

createServer({
  routes() {
    this.namespace = 'api/v1';
    this.passthrough('/**');
    this.passthrough('https://icanhazip.com/');

    // Check user token
    this.post('/users/me', () => {
      return { ...token };
    });

    // Login with email and password
    this.post('/auth', () => {
      return { ...token };
    });

    // Create user
    this.post('/users', () => {
      return {
        ...token,
        message: 'User created.',
      };
    });

    // Update user
    this.put('/users', () => {
      return {
        ...token,
        message: 'User updated.',
      };
    });

    // Delete user
    this.delete('/users', () => {
      return {};
    });

    // Send reset email
    this.post('/emails/pw-reset', () => {
      return {
        message: 'Reset request sent.',
      };
    });
  },
});

export { createServer };