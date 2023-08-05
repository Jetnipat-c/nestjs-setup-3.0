import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { UsersEntity } from '../entities/users.entity';

export default class Users1691248203560 implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userFactory = await factoryManager.get(UsersEntity);
    await userFactory.saveMany(5);
  }
}
