/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateGenreRepository } from '../repository/update-genre.repository';
import { UpdateGenreDto } from '../dto/update-genre.dto';

@Injectable()
export class UpdateGenreUseCase {
    constructor(
        private readonly updateGenreRepository: UpdateGenreRepository,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdateGenreDto) {
        try {
            const genre = await this.updateGenreRepository.update(id, data);
            this.logger.log("Genre updated successfully");
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}