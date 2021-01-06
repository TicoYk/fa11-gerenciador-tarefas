import { Router } from '@angular/router';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  public tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ){
    this.tarefa = new Tarefa();
  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
