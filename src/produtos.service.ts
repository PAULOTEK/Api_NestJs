import { ProdutoModel } from './produto.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  produtos: ProdutoModel[] = [
    new ProdutoModel('LIV01', 'Livro TDD e BDD na pratica', 29.9),
    new ProdutoModel('LIV02', 'Livro iniciando com flutter', 39.9),
    new ProdutoModel('LIV03', 'Livro inteligencia artificial', 29.9),
  ];

  obterTodos(): ProdutoModel[] {
    return this.produtos;
  }
  obterUm(id: number): ProdutoModel {
    return this.produtos[0];
  }
  criar(produto: ProdutoModel) {
    this.produtos.push(produto);
  }
  alterar(produto: ProdutoModel): ProdutoModel {
    return produto;
  }
  apagar(id: number) {
    this.produtos.pop();
  }
}
