/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateGenreRepository } from '../repository/create-genre.repository';
import { CreateGenreDto } from '../dto/create-genre.dto';

@Injectable()
export class CreateGenreUseCase {
    constructor(
        private readonly createGenreRepository: CreateGenreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateGenreDto){
        try {
            const genre = this.createGenreRepository.create(data);
            this.logger.log('Genre created successfully');
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
