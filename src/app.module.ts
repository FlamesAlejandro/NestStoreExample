import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { mysqlConnection } from './connections/mysql.connection.import'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    mysqlConnection
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
