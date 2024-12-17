import { age, callback, empty, toggle, username } from "./basic/1";
import { person } from "./basic/2";
import { action, element } from "./basic/3";
import { calc, showMessage } from "./basic/4";
import { DayOfWeek, isWeekend } from "./basic/5";
import "./style.css";

console.log(age);
console.log(username);
console.log(toggle);
console.log(empty);
console.log(callback);
console.log(person);
console.log(element);
console.log(action);
showMessage("hello world");
console.log(calc(10, 10));
console.log(isWeekend(DayOfWeek.Monday));
