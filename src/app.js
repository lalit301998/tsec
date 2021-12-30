"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = __importDefault(require("./student"));
var teacher_1 = __importDefault(require("./teacher"));
var teacher = new teacher_1.default();
console.warn(teacher.data);
var student = new student_1.default();
console.warn(student.data);
