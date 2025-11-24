/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class DeleteGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async delete(id: string) {
        const genre = await this.prisma.genre.delete({ where: { id } });
        return genre;
    }
}
