import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoLista } from './aluno-lista';

describe('AlunoLista', () => {
  let component: AlunoLista;
  let fixture: ComponentFixture<AlunoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
