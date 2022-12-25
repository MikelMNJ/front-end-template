import { createServer } from 'miragejs';

const demoToken = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUxMTRjMDBhNTAxZTU0M2MzNjQ0ZGU3In0sImlhdCI6MTY3MTQxNjAwMiwiZXhwIjoxNjc0MDA4MDAyfQ.kNRGniRnD4yxya_z-6j36PYXpwuCLmxj-35JIc7LDKY' };

createServer({
  routes() {
    this.namespace = 'api/v1';
    this.passthrough();

    // Check user token
    this.post('/users/me', (schema, request) => {
      return demoToken;
    });

    // Login with email and password
    this.post('/auth', (schema, request) => {
      return demoToken;
    });

    // Create user
    this.post('/users', (schema, request) => {
      return demoToken;
    });

    // Update user
    this.put('/users', (schema, request) => {
      return demoToken;
    });

    // Delete user
    this.delete('/users', (schema, request) => {
      return {};
    });

    // Send reset email
    this.post('/emails/pw-reset', (schema, request) => {
      return {};
    });
  },
});

export { createServer };