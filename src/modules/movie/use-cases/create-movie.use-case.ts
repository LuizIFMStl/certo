/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { CreateMovieRepository } from '../repository/create-movie.repository';

@Injectable()
export class CreateMovieUseCase {
    constructor(
        private readonly createMovieRepository: CreateMovieRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateMovieDto){
        try {
            const movie = this.createMovieRepository.create(data);
            this.logger.log('movie created successfully');
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}