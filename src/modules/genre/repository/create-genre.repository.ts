/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../shared/databases/prisma.database";
import { CreateGenreDto } from "../dto/create-genre.dto";

@Injectable()
export class CreateGenreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: CreateGenreDto) {
        const genre = await this.prisma.genre.create({
            data,
        });
        return genre;
    }
}
