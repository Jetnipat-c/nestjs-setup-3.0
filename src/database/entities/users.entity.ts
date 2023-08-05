import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../base.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @Exclude()
  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @Column({ name: 'username', type: 'varchar', nullable: false, unique: true })
  username: string;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;
}
