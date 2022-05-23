import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tweet_post')
export class TweetPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    message: string;

    @CreateDateColumn()
    createdAt: Date;
}