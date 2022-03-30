import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PostComponent } from './components/post/post.component';
import { PostContainerComponent } from './containers/post-container/post-container.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent, HomeContainerComponent, PostComponent, PostContainerComponent, DashboardTileComponent],
  imports: [CommonModule],
  exports: [HomeComponent, NavbarComponent],
})
export class DashboardModule {}
