import { Module } from '@nestjs/common';
import { PersonaModule } from './persona/persona.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PersonaModule, UsuarioModule]
})
export class CoreModule {}
