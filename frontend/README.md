# React + Vite + Docker

For this to work well, you need to have docker installed.
Clone the repository, and then in the console, execute  $ docker compose up
If there's no problem, you should see something like this in console:

lean@LEAN-PC:~/fullstack-course/node-vite-project-docker$ docker compose up
[+] Running 1/1
 ✔ Container node-dev-env  Created                                                                                 0.0s
Attaching to node-dev-env
node-dev-env  |
node-dev-env  | > part1@0.0.0 dev
node-dev-env  | > vite
node-dev-env  |
node-dev-env  |
node-dev-env  |   VITE v6.2.3  ready in 132 ms
node-dev-env  |
node-dev-env  |   ➜  Local:   http://localhost:5173/
node-dev-env  |   ➜  Network: http://172.18.0.2:5173/

Now you can start coding withowt installing node locally, and enter http://localhost:5173/ for viewing page


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
