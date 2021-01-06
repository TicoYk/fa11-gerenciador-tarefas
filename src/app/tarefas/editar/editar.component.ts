import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  public tarefa: Tarefa | undefined;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: number | null = null;
    this.route.paramMap.subscribe( paramMap => {
      id = Number(paramMap.get('id'));
    });
    if (id != null){
      this.tarefa = this.tarefaService.buscarPorId(id);
    }
  }

  atualizar(): void {
    if (this.formTarefa.valid && this.tarefa !== undefined){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['./tarefas/listar']);
    }
  }

}
