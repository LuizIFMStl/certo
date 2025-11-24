/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const movie = await this.prisma.movie.findMany({
            include: {
                scores: true,
            }
        });
        if (!movie) {throw new NotFoundException("movie not found");}
        return movie;
    }
}