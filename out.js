var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Userutils;
(function (Userutils) {
    var parent = /** @class */ (function () {
        function parent() {
        }
        parent.prototype.setname = function (name) {
            return this.name = name;
        };
        return parent;
    }());
    Userutils.parent = parent;
})(Userutils || (Userutils = {}));
// function Cals():number // number defines the datatype
// {
//     return 10+10 // It return the numerical value
// }
// console.warn(Cals())
// passing the argument to function
//  function Cals(a):number // number defines the datatype
//  {
//      return a; // It return the numerical value
//  }
//  console.warn(Cals(100))
// function Cals(a:number,b?:number):number//number is datatype and Cals is a 
// // function and ? defiens the optional parameter
//   {
//       return b?a+b:a; // it defines the if the b is present then it return a+b
//       // otherwise it return only a
//   }
//   console.warn(Cals(10))
//-----classes----------//
// class Index{
//     // In this class name is property
//     name = "anil sidhu"
//     // In this case getname is the function and this can be used for accessing
//     // the name property
//     getname()
//     {
//       console.warn(this.name)
//     }
// }
// // In this case we defining the object
// let a1= new Index();
// // calling the function name
// a1.getname();
// -----constructor definiton and use of constructor-------
// class Index{
//     //name : string;//name is the property    
//     constructor(protected nameeg : string){
//         // In constructor property name is private to access outside we use
//         // protected
//         //this.name=nameeg;
//     }
//     getname()
//     {
//       console.warn(this.nameeg)
//     }
// }
// let a1=new Index("hello");
// a1.getname();
//a1.name
//--- understanding of constructor and function----
// class Index{
//          name :string="anil sidhu";//name is the property    
//          constructor( name : string){
//              // In constructor property name is private to access outside we use
//               //protected
//              //this.name=name; It can be used to set the value which I am passing
//              // through object
//              console.log(this.name)
//          }
//          getname():string
//          {
//            return this.name;
//          }
//      }
//      let a1=new Index("hello");
//      console.warn(a1.getname());
//-------understanding of Inheritance in typescript
// class Parent{
//     name;// jaha pe property define krte ha
//     setname(name):void
//   {
//     this.name=name // jaha pe name ko set kiya jaha jo object me pass kiya hua
//     //ha
//   }
// }
// class Child extends Parent{
//      getname():string
//    {
//     return this.name; 
//    }
// }
// let c1=new Child();
// c1.setname("lalit")
// console.log(c1.getname());
//---- understnading the concept of name-------//
/// <reference path="./utils.ts"/>
var Userutils;
(function (Userutils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getname = function () {
            return this.name;
        };
        return Users;
    }(Userutils.parent));
    Userutils.Users = Users;
})(Userutils || (Userutils = {}));
var u1 = new Userutils.Users();
u1.setname("tony");
console.warn(u1.getname());
