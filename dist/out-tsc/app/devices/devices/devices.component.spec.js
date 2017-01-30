import { async, TestBed } from '@angular/core/testing';
import { DevicesComponent } from './devices.component';
describe('DevicesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DevicesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DevicesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/SSMacProHasael/Workspace/JavaScript/AngularJS/SmarterDevices/src/app/devices/devices/devices.component.spec.js.map