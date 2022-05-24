import { Role } from '@twitter-clone-ws/api-interfaces';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TweetPostEntity } from '../../tweet/model/post.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @OneToMany(() => TweetPostEntity, (tweetPostEntity) => tweetPostEntity.author)
  tweetPosts: TweetPostEntity[];
}
