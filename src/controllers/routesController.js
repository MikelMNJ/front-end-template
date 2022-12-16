
const routes = [
  {
    path: "*",
    element: <p>[Not found component here]</p>,
  },
  {
    path: "/",
    element: <p>Authenticated Content</p>,
    authenticate: true,
  },
];

export default routes;