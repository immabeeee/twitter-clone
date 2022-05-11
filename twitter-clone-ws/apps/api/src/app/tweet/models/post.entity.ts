import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tweet_post')
export class TweetPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    message: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}