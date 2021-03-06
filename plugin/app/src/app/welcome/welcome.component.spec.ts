import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WelcomeComponent } from "./welcome.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";

describe("WelcomeComponent", () => {
	let component: WelcomeComponent;
	let fixture: ComponentFixture<WelcomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CoreModule,
				SharedModule,
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WelcomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
