export default class Countdown {
  constructor(futureDate){
    this.futureDate = futureDate;
  }

  get _acutalDate(){
    return new Date();
  }

  get _futureDate(){
    return new Date(this.futureDate)
  }

  get _timeStampDiff(){
    return this._futureDate.getTime() - this._acutalDate.getTime();
  }
}
