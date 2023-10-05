import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Comment } from "../app/comment.entity";

export default class TypeormConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      username: 'postgres',
      password: 'postgres',
      database: 'test_node',
      host: 'localhost',
      port: 5432,
      type: 'postgres',
      synchronize: true,
      entities: [ Comment ],
    };
  }
}

export const typeOrmConfigAsync = {
  imports: [ ConfigModule ],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeormConfig.getOrmConfig(configService),
  inject: [ ConfigService ],
};
