# node-ts
A starting point for Node.js express apps with TypeScript
[![Dependency Status](https://david-dm.org/abz0/node-ts/status.svg?style=flat)](https://david-dm.org/abz0/node-ts) [![devDependencies Status](https://david-dm.org/abz0/node-ts/dev-status.svg)](https://david-dm.org/abz0/node-ts?type=dev)

### 1-Step Deployment with Heroku

<img src="https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png" width="200">

- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In a terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `MONGODB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

---
