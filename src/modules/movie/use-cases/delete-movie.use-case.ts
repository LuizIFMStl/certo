import { Injectable, Logger } from '@nestjs/common';
import { DeleteMovieRepository } from '../repository/delete-movie.repository';

@Injectable()
export class DeleteMovieUseCase {
    constructor(
        private readonly deleteMovieRepository: DeleteMovieRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id:string) {
        try {
            const movie = await this.deleteMovieRepository.delete(id);
            this.logger.log("Movie deleted successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}