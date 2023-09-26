export default class Contact {
    private static _count: number = 0;
    private _id: number;

    constructor(
        private _firstname: string,
        private _lastname: string,
        private _dateOfBirth: Date,
        private _email: string,
        private _phoneNumber: string,
        private _avatarURL: string
        ){
            this._id = ++Contact._count;
        }

        get firstname(): string {
            return this._firstname;
          }
      
        get lastname(): string {
            return this._lastname;
        }

        get fullname(): string {
            return this._firstname + " " + this._lastname;
          }

          get dateOfBirth(): Date {
            return this._dateOfBirth;
          }

          get email(): string {
            return this._email;
          }
      
          get phoneNumber(): string {
            return this._phoneNumber;
          }

          set firstname(value: string) {
            this._firstname = value;
          }
      
          set lastname(value: string) {
            this._lastname = value;
          }
      
          set dateOfBirth(value: Date) {

            this._dateOfBirth = value;
          }
      
          set email(value: string) {
            this._email = value;
          }
      
          set phoneNumber(value: string) {
            this._phoneNumber = value;
          }
      
          set avatarURL(value: string) {
            this._avatarURL = value;
          }
        
          get avatarURL(): string {
            if (this._avatarURL.length == 0) {
              return "./assets/img/unknown.jpg"
            }
      
            return this._avatarURL;
          }


        get age(): number {
            const today = new Date() // 26/09/2023
            const todayCopy = new Date() // 26/09/2023
            todayCopy.setFullYear(this._dateOfBirth.getFullYear()) // 26/09/2000

            if(todayCopy < this._dateOfBirth){
                return today.getFullYear() - this._dateOfBirth.getFullYear() -1
            }else {
                return today.getFullYear() - this._dateOfBirth.getFullYear()
            }

        }

}