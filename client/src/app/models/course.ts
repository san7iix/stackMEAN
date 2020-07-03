export class Course {

  constructor(_id = '', name = '', schedule = '', dateIni = '', dateFin = '', studentAssocciated = 0) {
    this._id = _id;
    this.name = name;
    this.schedule = schedule;
    this.dateIni = dateIni;
    this.dateFin = dateFin;
    this.studentAssocciated = studentAssocciated
  }

  _id: string;
  name: string;
  schedule: string;
  dateIni: string;
  dateFin: string;
  studentAssocciated: number;

}
