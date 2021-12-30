"use strict";
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
// //---- understnading the concept of namespace-------//
// /// <reference path="./utils.ts"/>
// namespace Userutils
// {
//     export class Users extends parent implements userType{
//         getname()
//         {
//             return this.name
//         }
//     }
// }
// let u1 = new Userutils.Users();
// u1.setname("tony kakkar")
// console.warn(u1.getname())
// // how to define normal function in typescript
// function users(data)
// {
//  return data;    
// }
// console.warn(users({name:"anil",age:'30'}).age)// it print the age
// function users<T>(data:T):T // where t defines the genreic data type which
// // takes any output without defining the dataypes
//  {
//   return data;    
//  }
//  console.warn("lalit")
//---- understanding the concept of enum-----
// enum Days{
//     mon,tue,wed,thu,fri,saturday
// }
// let whichday:Days;
// whichday=Days.wed
// console.log(whichday);
// enum Days{
//     mon="mon",tue="tue"
// }
// let whichday:Days;
// whichday=Days.mon
// console.log(whichday);// It prints monday
// enum Days{
//     mon=10,tue,wed,thu,friday,sat,sun
// }
// function whichday(day:Days)
// {
//   return day
// }
// console.warn(whichday(Days.sat))
//------symbol in typescript------//
// symbol provides the unique id for each object
// use symbol as key of object
// use symbol as function of class
// let s1 = Symbol()
// let s2 = Symbol()
// console.warn(s1===s2)// It always return false because it provide false value
// console.log(s1.toString());
// let s1 = Symbol("d1")
// console.warn(s1)
// let data={
//    [s1]:"some data"
// }
// console.warn(data[s1])// it prints some data
// To make function unique we use symbol 
// let demoF1 = Symbol("d1")
// class demo{
//   [demoF1](){
//     return "some data"
//   }
// }
// let d1 = new demo(); 
// console.warn(d1[demoF1]())// It prints some data
//-------understanding the configuration config file in typescript-------//
// tsc -- init is used to make the command of json file
