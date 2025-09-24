import { IExecuteFunctions } from 'n8n-core';
import {
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';

export class Random implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Random',
    name: 'random',
    icon: 'file:Random.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["min"] + " - " + $parameter["max"]}}',
    description: 'True Random Number Generator usando Random.org',
    defaults: {
      name: 'Random',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Min',
        name: 'min',
        type: 'number',
        default: 1,
        description: 'Valor mínimo (inclusivo).',
        required: true,
      },
      {
        displayName: 'Max',
        name: 'max',
        type: 'number',
        default: 100,
        description: 'Valor máximo (inclusivo).',
        required: true,
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const min = this.getNodeParameter('min', 0) as number;
    const max = this.getNodeParameter('max', 0) as number;

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new Error('Min e Max devem ser números inteiros.');
    }
    if (min > max) {
      throw new Error('Min não pode ser maior que Max.');
    }

    const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    const response = await this.helpers.httpRequest({
      method: 'GET',
      url,
      json: false,
      timeout: 10000,
    });

    const text = typeof response === 'string' ? response : String(response);
    const value = parseInt(text.trim(), 10);

    if (Number.isNaN(value)) {
      throw new Error('Resposta inválida da API random.org: ' + text);
    }

    return [this.helpers.returnJsonArray([{ random: value }])];
  }
}
