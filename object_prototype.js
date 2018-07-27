/**
 * Javascript is about Object !
 * 
 * Apa itu prototype object? 
 * 
 * Jadi setiap kali kita buat Function(), Javascript sudah siapkan
 * object prototype didalamnya. 
 */

 function Person() {

 }

 /**
  * fungsi Person() klo kita cek di console, maka dia sudah nyediain object 
  * yang diberi nama prototype
  * 
  * Person.prototype = {}
  * 
  * coba aja cek dengan : console.log(Person)
  * 
  * prototype berguna untuk membuat properties dan juga inheritance
  */

  function Person() {
      this.name = "Budi"

      //membuat method dalam Fucntion constructor is a bad idea
      //karena kita sbnarnya assign anonim funcrion ke memory
      // lebih baik buat di prottype saja
      this.sayName = function() {
          return 'My name is ' + this.name;
      };
  }

  /**
   * Bisa juga kita buat begini
   */
  Person.prototype.name = "Budi";

  /**
   * Bisa juga untuk membuat method baru
   */
  Person.prototype.sayName = function() {
    return 'My name is ' + this.name;
  };

  Person.prototype.newMethod = function() {
      // 
  };

  Person.prototype.newMethodAgain = function() {
      //
  };

 /**
  * Semua function yang kita buat, itu sebenarnya mewarisi prototype dari Object(),
  * sebuah built-in function di Javascript
  * 
  * Misal kita buat
  */

  function Human () {

  }

  /**
   * Human sebenarnya mewarisi function Object(), makanya kalo kita buat:
   */

  var agus = new Human();
  
  /**
   * agus akan punya akses ke properti prototype milik function Object()
   * 
   * misal: agus.valueOf(), agus.hasOwnProperty(), agus.isPrototypeOf() dan lain-lain
   * silahkan cek di console browser
   * 
   * Jika dirunut maka urutan inheritance nya:
   * 
   * agus -> inherit from -> Human() -> inherit from -> Object()
   * atau lebih detail lagi
   * agus -> inherit from -> Human.prototype -> inherit from -> Object.prototype
   * 
   * tapi si agus tidak punya akses langsung ke property dari constructor Object()
   * 
   * agus.create() <--- error , karenanya kalo kita check 
   * agus.hasOwnProperty('create') <-- false
   */
