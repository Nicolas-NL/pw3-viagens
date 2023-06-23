import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'detalhes', component:DetalhesComponent},
  {path:'excluir', component:ExcluirComponent},
  {path:'listagem', component:ListagemComponent},
  {path:'cadastrar', component:CadastrarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
