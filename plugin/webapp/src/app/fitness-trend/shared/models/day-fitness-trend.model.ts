import * as moment from "moment";
import { DayStressModel } from "./day-stress.model";

export class DayFitnessTrendModel extends DayStressModel {

	public static readonly DATE_FORMAT: string = "YYYY-MM-DD";

	constructor(dayStress: DayStressModel, ctl: number, atl: number, tsb: number) {
		super(dayStress.date, dayStress.previewDay);

		this.ids = dayStress.ids;
		this.type = dayStress.type;
		this.activitiesName = dayStress.activitiesName;
		this.concatenatedActivities = dayStress.concatenatedActivities;
		this.trimpScore = dayStress.trimpScore;
		this.powerStressScore = dayStress.powerStressScore;
		this.swimStressScore = dayStress.swimStressScore;
		this.finalStressScore = dayStress.finalStressScore;

		this.dateString = moment(this.date).format(DayFitnessTrendModel.DATE_FORMAT);
		this.ctl = ctl;
		this.atl = atl;
		this.tsb = tsb;
	}

	public dateString: string;
	public ctl: number;
	public atl: number;
	public tsb: number;

	public printFitness(): string {
		return this.ctl.toFixed(1);
	}

	public printFatigue(): string {
		return this.atl.toFixed(1);
	}

	public printForm(): string {
		return this.tsb.toFixed(1);
	}

	public printDate(): string {

		const dayFitnessMoment = moment(this.date);
		const isToday = moment().startOf("day").isSame(dayFitnessMoment);

		let niceDate: string = dayFitnessMoment.format("dddd, MMMM Do YYYY");

		if (isToday) {
			niceDate = "Today, " + niceDate;
		}

		return niceDate;
	}

	// TODO rework this like printTypes below!
	// FIXME column order not working well
	public printActivities(defaultEmptyValue?: string): string {

		let printed = (defaultEmptyValue) ? defaultEmptyValue : "Rest day";
		if (this.activitiesName.length > 0) {
			printed = this.concatenatedActivities;
		} else if (this.previewDay) {
			printed = "-";
		}
		return printed;
	}

	// FIXME column order not working well
	public printTypes(defaultEmptyValue?: string): string {

		if (this.type.length === 0) {

			if (defaultEmptyValue) {
				return defaultEmptyValue;
			}
			return null;
		}

		return this.type.join("; ");
	}

}