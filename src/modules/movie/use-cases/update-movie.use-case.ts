/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { UpdateScenarioRepository } from '../repository/update-scenario.repository';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';

@Injectable()
export class UpdateScenarioUseCase {
    constructor(
        private readonly updateScenarioRepository: UpdateScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateScenarioDto) {
        try {
            const scenario = await this.updateScenarioRepository.update(id,data);
            this.logger.log("Scenario updated successfully");
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}