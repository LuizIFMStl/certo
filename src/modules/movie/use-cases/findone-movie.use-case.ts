/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneMovieRepository } from '../repository/findone-movie.repository';

@Injectable()
export class FindOneMovieUseCase {
    constructor(
        private readonly findoneMovieRepository: FindOneMovieRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const movie = await this.findoneMovieRepository.findone(id);
            this.logger.log("Movie found successfully");
            if (!movie) return new NotFoundException("Movie not found");
            return movie;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Movie not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}