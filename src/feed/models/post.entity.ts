/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line prettier/prettier

@Entity('person')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    nama: string;

    @Column({ default: '' })
    kota: string;

    @Column()
    umur: number;
}