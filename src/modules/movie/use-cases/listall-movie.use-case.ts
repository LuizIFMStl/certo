/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { ListScenarioRepository } from '../repository/listall-scenario.repository';

@Injectable()
export class ListScenarioUseCase {
    constructor(
        private readonly listScenarioRepository: ListScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const scenario = this.listScenarioRepository.list();
            this.logger.log("Scenario listed successfully");
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}