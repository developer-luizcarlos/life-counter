namespace HandleLifeTime {
  export class LifeTime {
    private currentDay = new Date().getDate();
    private currentMonth = new Date().getMonth() + 1;
    private currentYear = new Date().getFullYear();

    private birthDay = 0;
    private birthMonth = 0;
    private birthYear = 0;

    private differenceDays = 0;
    private differenceMonths = 0;
    private differenceYears = 0;

    constructor(birthDay, birthMonth, birthYear) {
      this.birthDay = birthDay;
      this.birthMonth = birthMonth;
      this.birthYear = birthYear;

      this.differenceDays = 0;
      this.differenceMonths = (this.currentMonth !== this.birthMonth) ? this.currentMonth - this.birthMonth + 12 : 0;
      this.differenceYears = this.currentYear - this.birthYear;

      if(this.currentDay > this.birthDay)
      {
        this.differenceDays = this.currentDay - this.birthDay;
      } else if(this.currentDay < this.birthDay)
      {
        this.differenceDays = this.birthDay - this.currentDay;
        this.differenceMonths -= 1;
      }

      if(this.currentMonth < this.birthMonth)
      {
        this.differenceYears -= 1;
      }
    }

    get getCompleteAge() {
      return {
        days: this.differenceDays,
        months: this.differenceMonths,
        years: this.differenceYears
      };
    }

    get getDifferenceDays() {
      return this.differenceDays;
    }

    get getDifferenceMonths() {
      return this.differenceMonths;
    }

    get getDifferenceYears() {
      return this.differenceYears;
    }
  }
}

const fullAge = new HandleLifeTime.LifeTime(11, 7, 2004);