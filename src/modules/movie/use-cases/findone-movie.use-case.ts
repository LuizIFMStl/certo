/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneScenarioRepository } from '../repository/findone-scenario.repository';

@Injectable()
export class FindOneScenarioUseCase {
    constructor(
        private readonly findoneScenarioRepository: FindOneScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const scenario = await this.findoneScenarioRepository.findone(id);
            this.logger.log("Scenario found successfully");
            if (!scenario) return new NotFoundException("Scenario not found");
            return scenario;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Scenario not found");
            }
            this.logger.error(error);
            throw error;
        }
    }
}