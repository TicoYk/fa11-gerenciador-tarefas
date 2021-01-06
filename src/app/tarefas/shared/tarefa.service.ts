import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  buscarPorId(id: number): Tarefa | undefined{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(obj => obj.id === id);
  }

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    let newTarefas = tarefas;
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        newTarefas[index] = tarefa;
      }
    });
    localStorage.setItem('tarefas', JSON.stringify(newTarefas));
  }

  remover(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => !(tarefa.id === id));
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
}
