import { NgModule } from '@angular/core';

import { JHipstAppTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHipstAppTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHipstAppTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHipstAppTestSharedCommonModule {}
