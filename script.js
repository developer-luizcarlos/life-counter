class LifeTime
{
  currentDay = new Date().getDate();
  currentMonth = new Date().getMonth() + 1;
  currentYear = new Date().getFullYear();

  birthDay = 0;
  birthMonth = 0;
  birthYear = 0;

  differenceDays = 0;
  differenceMonths = 0;
  differenceYears = 0;

  constructor(birthDay, birthMonth, birthYear)
  {
    this.birthDay = birthDay;
    this.birthMonth = birthMonth;
    this.birthYear = birthYear;

    this.differenceDays = 0;
    this.differenceMonths = (this.currentMonth !== this.birthMonth) ? this.currentMonth - this.birthMonth + 12 : 0;
    this.differenceYears = this.currentYear - this.birthYear;

    if (this.currentDay > this.birthDay)
    {
      this.differenceDays = this.currentDay - this.birthDay;
    } else if (this.currentDay < this.birthDay)
    {
      this.differenceDays = this.birthDay - this.currentDay;
      this.differenceMonths -= 1;
    }

    if (this.currentMonth < this.birthMonth)
    {
      this.differenceYears -= 1;
    }
  }

  getCompleteAge()
  {
    return `${this.differenceDays} days, ${this.differenceMonths} months and ${this.differenceYears} years`;
  }
}

const myAge = new LifeTime(7, 5, 1970);
console.log(myAge.getCompleteAge())