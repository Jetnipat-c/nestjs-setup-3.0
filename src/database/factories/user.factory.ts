import { setSeederFactory } from 'typeorm-extension';
import { UsersEntity } from '../entities/users.entity';

export default setSeederFactory(UsersEntity, (faker) => {
  const user = new UsersEntity();
  user.name = faker.person.firstName();
  user.username = faker.person.middleName();
  user.password = faker.internet.password();

  return user;
});
