/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { DeleteGenreRepository } from '../repository/delete-genre.repository';

@Injectable()
export class DeleteGenreUseCase {
    constructor(
        private readonly deleteGenreRepository: DeleteGenreRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            const genre = await this.deleteGenreRepository.delete(id);
            this.logger.log("Genre deleted successfully");
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
