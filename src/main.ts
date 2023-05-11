import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:true,
    logger: ['error', 'warn', 'log']
  });
  
  //app.enableCors()
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}));

  await app.listen(5000);
}
bootstrap().then(r => {});
