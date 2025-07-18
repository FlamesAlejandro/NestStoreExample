// src/connections/mysql.connection.import.ts
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

export const mysqlConnection = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST'),
    port: parseInt(configService.get<string>('MYSQL_PORT'), 10),
    username: configService.get<string>('MYSQL_USER'),
    password: configService.get<string>('MYSQL_PASSWORD'),
    database: configService.get<string>('MYSQL_DATABASE'),
    autoLoadEntities: true,
    synchronize: true // solo para desarrollo, luego en prod: false
  })
})
