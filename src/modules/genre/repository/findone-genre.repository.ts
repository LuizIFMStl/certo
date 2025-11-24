/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class FindOneGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id: string) {
        const genre = await this.prisma.genre.findUnique({ where: { id } });
        return genre;
    }
}