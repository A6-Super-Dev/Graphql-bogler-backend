import ExpressApplication from './app';
import env, { Environment } from './config/env';

//TODO:
const app = new ExpressApplication({
  port:
    env.environment === Environment.Production
      ? parseInt(env.port)
      : parseInt(env.portLocal) || 8080,
});

app.listen();
