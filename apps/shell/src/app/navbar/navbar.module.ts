import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [NavbarComponent, SidenavComponent ],
  imports: [CommonModule,NavbarRoutingModule
            
  ],
  exports: [NavbarComponent,
            SidenavComponent],
})
export class NavbarModule {}
