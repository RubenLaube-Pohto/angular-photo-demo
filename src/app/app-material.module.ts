import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

const materialModules = [MatSidenavModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule];

@NgModule({
    imports: materialModules,
    exports: materialModules,
})
export class AppMaterialModule {}
