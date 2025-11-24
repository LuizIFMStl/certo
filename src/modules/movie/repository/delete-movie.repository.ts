/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class DeleteMovieRepository {
    constructor(private readonly prisma: PrismaService) { }

    async delete(id: string) {
        const movie = await this.prisma.movie.delete({ where: { id } });
        return movie;
    }
}
