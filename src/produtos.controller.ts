import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoModel } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  @Get() getobterTodos(): ProdutoModel[] {
    return this.produtosService.obterTodos();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Get(':id') getUm(@Param() params): ProdutoModel {
    return this.produtosService.obterUm(params.id);
  }
  @Post() postCriar(@Body() produto: ProdutoModel) {
    this.produtosService.criar(produto);
  }

  @Put() putAlterar(@Body() produto: ProdutoModel): ProdutoModel {
    return this.produtosService.alterar(produto);
  }
  @Delete(':id')
  deleteApagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }
}
