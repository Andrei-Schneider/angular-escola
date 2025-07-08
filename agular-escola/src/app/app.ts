import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'meu-primeiro-projeto';

  exibicao: string = 'lista';
  exibirAprov: string = 'cards';

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 111,
      nome: 'João',
      email: 'harry@proway.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS'],
      imagem: 'assets/imagens/Ronaldo.png',
      notas: []
    },
    {
      matricula: 222,
      nome: 'Gustavinho',
      email: 'hermione@proway.com',
      cadastro: true,
      cursos: ['Java', 'Postgres'],
      imagem: 'assets/imagens/Gato.png',
      notas: []
    },
    {
      matricula: 333,
      nome: 'Arnoldo',
      email: 'rony@proway.com',
      cadastro: false,
      cursos: ['Python', 'Oracle'],
      imagem: 'assets/imagens/coelho.png',
      notas: []
    },
    {
      matricula: 444,
      nome: 'Silvo',
      email: 'bob@proway.com',
      cadastro: true,
      cursos: ['C++', 'PLSQL'],
      imagem: 'assets/imagens/Gato2.png',
      notas: []
    }
  ];

  listaFiltro: AlunoInterface[] = this.listaAlunos;

  alterarExibicao(): void {
    if (this.exibicao == 'cards') {
      this.exibicao = 'lista';
    } else if (this.exibicao == 'lista') {
      this.exibicao = 'cards';
    }
  }

  filtrarAprovados(): void {

    this.listaFiltro = [];

    this.listaAlunos.forEach(aluno => {
      if (aluno.cadastro == true) {
        this.listaFiltro.push(aluno);

      }
    });

  }

  filtrarReprovados(): void {

    this.listaFiltro = [];
    this.listaFiltro = this.listaAlunos.filter(aluno => {
      return aluno.cadastro == false;
    })

  }

  exibirTodos(): void {
    this.listaFiltro = this.listaAlunos;
  }

  //Resumindo todas as funções acima
  filtrarAlunos(filtro: string) {
    if (filtro == 'aprovados') {
      this.listaFiltro = this.listaAlunos.filter(aluno => { aluno.cadastro == true });
    } else if (filtro == 'reprovados') {
      this.listaFiltro = this.listaAlunos.filter(aluno => { aluno.cadastro == false });
    } else if (filtro == 'todos') {
      this.listaFiltro = this.listaAlunos;
    }
  }

}
