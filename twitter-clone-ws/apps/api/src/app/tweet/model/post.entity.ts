import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { UserEntity } from '../../auth/model/user.entity';

@Entity('tweet_post')
export class TweetPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.tweetPosts)
  author: UserEntity;
}
