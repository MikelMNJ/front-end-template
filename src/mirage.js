import { createServer, Model, Factory } from 'miragejs';

const seeds = server => server.createList('user', 10);
const models = { user: Model };
const factories = {
  user: Factory.extend({
    name(i) { return `User ${i + 1}` },
    email(i) { return `user${i + 1}@somewhere.com` },
  }),
};

const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWUxMTRjMDBhNTAxZTU0M2MzNjQ0ZGU3In0sImlhdCI6MTY3MTQxNjAwMiwiZXhwIjoxNjc0MDA4MDAyfQ.kNRGniRnD4yxya_z-6j36PYXpwuCLmxj-35JIc7LDKY' };

createServer({
  models,
  factories,
  routes() {
    this.namespace = 'api/v1';
    this.passthrough();

    // Mock Auth endpoints.
    this.post('/auth', (schema, request) => {
      return token;
    });

    this.post('/users/me', (schema, request) => {
      return token;
    });

    this.post('/emails/pw-reset', (schema, request) => {
      return {};
    });

    this.put('/users', (schema, request) => {
      return token;
    });

    this.post('/users', (schema, request) => {
      return token;
    });

    // GET: Get all users
    this.get('/mock/users', (schema, request) => {
      return schema.users.all();
    });

    // GET: Get user by ID
    this.get('/mock/users/:id', (schema, request) => {
      const id = request.params.id;
      return schema.users.find(id);
    });

    // POST: Add new user
    this.post('/mock/users', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.users.create(attrs);
    });

    // PUT: Update user
    this.put('/mock/users/:id', (schema, request) => {
      const newAttrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      const user = schema.users.find(id);

      return user.update(newAttrs);
    });

    // DELETE: Delete user
    this.delete('/mock/users/:id', (schema, request) => {
      const id = request.params.id;
      schema.users.find(id).destroy();
      return { users: schema.users.all().models };
    });
  },
  seeds: server => seeds(server),
});

export { createServer };