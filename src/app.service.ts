import { Body, Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProdutos(): string {
    return `Lista todos os produtos`;
  }

  getUm(@Param() params): string {
    return `Retorna os dados do produto ${params}`;
  }

  postCria(): string {
    return `Produto criado`;
  }
  putAlterar(): string {
    return `Produto atualizado`;
  }

  deleteProduto(@Param() params): string {
    return `Apaga o produto ${params}`;
  }
}
