/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";

@Injectable()
export class ListGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const genre = await this.prisma.genre.findMany({
            include: {
                scores: true,
            }
        });
        if (!genre) {throw new NotFoundException("genre not found");}
        return genre;
    }
}