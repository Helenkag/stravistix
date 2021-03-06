import { DayFitnessTrendModel } from "./day-fitness-trend.model";
import { DayStressModel } from "./day-stress.model";
import { TrainingZone } from "./training-zone.enum";

describe("DayFitnessTrendModel", () => {

	it("should provide overload training zone (1)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = -39;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.OVERLOAD);

	});

	it("should provide overload training zone (2)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = -30;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.OVERLOAD);

	});

	it("should provide optimal training zone (1)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = -15;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.OPTIMAL);

	});

	it("should provide optimal training zone (2)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = -10;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.OPTIMAL);

	});

	it("should provide neutral training zone (1)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 0;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.NEUTRAL);

	});

	it("should provide neutral training zone (2)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 5;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.NEUTRAL);

	});

	it("should provide freshness training zone (1)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 10;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.FRESHNESS);

	});

	it("should provide freshness training zone (2)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 15;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.FRESHNESS);

	});

	it("should provide freshness training zone (3)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 25;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.FRESHNESS);

	});

	it("should provide transition training zone (1)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 26;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.TRANSITION);

	});

	it("should provide transition training zone (2)", () => {

		// Given
		const previewDay = false;
		const date = new Date();
		const dayStressModel: DayStressModel = new DayStressModel(date, previewDay);
		const tsb = 99;
		const dayFitnessTrendModel: DayFitnessTrendModel = new DayFitnessTrendModel(dayStressModel, 10, 20, tsb);

		// When
		const trainingZone: TrainingZone = dayFitnessTrendModel.findTrainingZone(tsb);

		// Then
		expect(trainingZone).toEqual(TrainingZone.TRANSITION);

	});

});
