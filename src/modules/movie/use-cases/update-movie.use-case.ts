/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateMovieRepository } from '../repository/update-movie.repository';
import { UpdateMovieDto } from '../dto/update-movie.dto';

@Injectable()
export class UpdateMovieUseCase {
    constructor(
        private readonly updateMovieRepository: UpdateMovieRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateMovieDto) {
        try {
            const movie = await this.updateMovieRepository.update(id,data);
            this.logger.log("Movie updated successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}