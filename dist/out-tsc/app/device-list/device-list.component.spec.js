import { async, TestBed } from '@angular/core/testing';
import { DeviceListComponent } from './device-list.component';
describe('DeviceListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DeviceListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DeviceListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/SSMacProHasael/Workspace/JavaScript/AngularJS/SmarterDevices/src/app/device-list/device-list.component.spec.js.map