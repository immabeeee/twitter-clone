import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TweetEntifty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    body: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}