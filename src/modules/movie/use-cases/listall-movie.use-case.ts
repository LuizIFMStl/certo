/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListMovieRepository } from '../repository/listall-movie.repository';

@Injectable()
export class ListMovieUseCase {
    constructor(
        private readonly listMovieRepository: ListMovieRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const movie = this.listMovieRepository.list();
            this.logger.log("Movie listed successfully");
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}