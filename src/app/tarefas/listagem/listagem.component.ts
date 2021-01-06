import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover(tarefa: Tarefa): void {
    if( confirm('Deseja remover a tarefa "' + tarefa.nome + '"?') && tarefa.id != null){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  concluir(tarefa: Tarefa): void{
    if (tarefa.id != null){
      tarefa.concluida = !tarefa.concluida;
      this.tarefaService.atualizar(tarefa);
    }

  }
}
