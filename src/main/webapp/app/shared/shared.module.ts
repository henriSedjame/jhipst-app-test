import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JHipstAppTestSharedLibsModule, JHipstAppTestSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JHipstAppTestSharedLibsModule, JHipstAppTestSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JHipstAppTestSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipstAppTestSharedModule {
    static forRoot() {
        return {
            ngModule: JHipstAppTestSharedModule
        };
    }
}
