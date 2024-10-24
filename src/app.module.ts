import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { appConfig } from '@config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CarModule } from '@modules';
import {ApolloServerPluginLandingPageLocalDefault} from "@apollo/server/plugin/landingPage/default"
import { PrismaModule } from './modules/prisma';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(),'src/schema.gql')
    }),
    CarModule,
    PrismaModule,
  ],

})

export class AppModule {}
