export class DataHelper {

   //Url
   public _homePageUrl: string;
   //User
   public _username: string;
   public _correctPass: string;
   public _incorrectPass: string;
   public _invalidPass: string;
   public _correctEmail: string;
   public _incorrectEmail: string;
   public _invalidEmail: string;
   public _signedInUsername: string;
   public _correctEmailForSignIn: string;
   public _correctPassForSignIn: string;
   //Social networks
   public _socialNetworksLogin: string;
   public _socialNetworksPass: string;
   //For search feature
   public _searchWord: string;
   
   constructor() {
      this._homePageUrl = "https://www.goodreads.com/"
      this._username = "Porker";
      this._correctPass = "pppooorrr";
      this._incorrectPass = "hollywood"
      this._invalidPass = "a";
      this._correctEmail = "porker1983@gmail.com";
      this._incorrectEmail = "breweruuuuuuuuuuu@mail.ru"
      this._invalidEmail = "parker1983gmail.com";
      this._socialNetworksLogin = "someEmailForSN@gmail.com";
      this._socialNetworksPass = "global13";
      this._searchWord = "Mexico";
      this._signedInUsername = "MRBEAN";
      this._correctEmailForSignIn = "mrbean1983@gmail.com";
      this._correctPassForSignIn = "mmmrrrbbb";
   }
}
 


