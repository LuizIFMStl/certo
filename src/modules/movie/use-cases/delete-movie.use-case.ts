/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class DeletemovieUseCase {
    constructor(
        private readonly deleteMovieRepository: DeletemovieRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id:string) {
        try {
            const movie = await this.deleteMovieRepository.delete(id);
            this.logger.log("movie deleted successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}