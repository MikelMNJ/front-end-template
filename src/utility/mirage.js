import { createServer } from 'miragejs';

// eslint-disable-next-line
const demoToken = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUxMTRjMDBhNTAxZTU0M2MzNjQ0ZGU3In0sImlhdCI6MTY3MTQxNjAwMiwiZXhwIjoxNjc0MDA4MDAyfQ.kNRGniRnD4yxya_z-6j36PYXpwuCLmxj-35JIc7LDKY' };

createServer({
  routes() {
    this.namespace = 'api/v1';
    this.passthrough();

    // Check user token
    this.post('/users/me', () => {
      return demoToken;
    });

    // Login with email and password
    this.post('/auth', () => {
      return demoToken;
    });

    // Create user
    this.post('/users', () => {
      return demoToken;
    });

    // Update user
    this.put('/users', () => {
      return demoToken;
    });

    // Delete user
    this.delete('/users', () => {
      return {};
    });

    // Send reset email
    this.post('/emails/pw-reset', () => {
      return {};
    });
  },
});

export { createServer };