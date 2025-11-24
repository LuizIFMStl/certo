/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneGenreRepository } from '../repository/findone-genre.repository';

@Injectable()
export class FindOneGenreUseCase {
    constructor(
        private readonly findoneGenreRepository: FindOneGenreRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id: string) {
        try {
            const genre = await this.findoneGenreRepository.findone(id);
            this.logger.log("Genre found successfully");
            if (!genre) return new NotFoundException("Genre not found");
            return genre;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Genre not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}
