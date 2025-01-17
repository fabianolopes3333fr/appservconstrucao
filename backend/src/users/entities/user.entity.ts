import { Entity } from 'typeorm';

@Entity()
export class User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    isActive!: boolean;
}