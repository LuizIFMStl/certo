/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class FindOneMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id: string) {
        const movie = await this.prisma.movie.findUnique({ where: { id } });
        return movie;
    }
}