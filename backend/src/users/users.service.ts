import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }
    async findOne(id: number): Promise<User | null> {
        const user = await this.usersRepository.findOne({ where: { id } });
        return user || null;
    }

    async create(user: Partial<User>): Promise<User> {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
    async update(id: number, user: Partial<User>): Promise<User | null> {
        await this.usersRepository.update(id, user);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
    async findByEmail(email: string): Promise<User | null> {
        const user = await this.usersRepository.findOne({ where: { email } });
        return user || null;
    }
}