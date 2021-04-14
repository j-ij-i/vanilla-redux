import {createStore} from "redux"

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch(action.type){
    case "ADD":
        return count + 1
    case "MINUS":
        return count - 1
    default:
      return count;
  }
};
//reducer는 data를 변경하는 함수
//action은 reducer(countModifier)와 소통하기 위한 방법


const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
  console.log("there was a change on the store");
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: ADD});
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS});
}
//action은 반드시 object 형태, 무조건 type 있어야함

console.log(countStore.getState());

// store 는 put data 할곳
//뭐든기 reducer와 modifier가 return하는건 data가 됨(결과값?)
//number.innerText = count;
//redux는 data가 기본적으로 한곳에 있음 (countModifier)

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);