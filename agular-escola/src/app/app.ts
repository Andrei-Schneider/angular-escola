import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'agular-escola';

  exibicao: string = 'cards';

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 231,
      nome: 'João',
      email: 'joaopeteca@gmail.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS']
    },

    {
      matricula: 7643,
      nome: 'Spezia',
      email: 'spezia@gmail.com',
      cadastro: true,
      cursos: ['Java', 'Postgres']
    }
  ];

  alterarExibicao(): void {
    //Implementar regra da função
    
    if (this.exibicao == 'cards') {
    this.exibicao = 'lista'
  } else if(this.exibicao == 'lista') {
    this.exibicao = 'cards'
  }

}
}
