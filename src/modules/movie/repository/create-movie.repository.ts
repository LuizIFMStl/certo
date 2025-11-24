/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";
import { CreateMovieDto } from "../dto/create-movie.dto";

@Injectable()
export class CreateMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateMovieDto) {
        const movie = await this.prisma.movie.create({
            data,
        });
        return movie;
    }
}
