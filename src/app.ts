import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { logger, requestLogger } from './common/helpers/logger';
import { schema } from './graphql';
import cors from 'cors';

interface ExpressApplication {
  port?: number;
}

export default class App {
  private app: Application = express();
  private port: number;

  constructor(appInit: ExpressApplication) {
    this.port = appInit.port;
    this.init();
  }

  private init() {
    this.enableLog();
    this.initRoutes();
  }

  private initRoutes() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );
  }

  private enableLog() {
    this.app.use(requestLogger());
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      logger.info(`App is listening on port ${this.port}`);
    });
  }
}
