class BoardMember {
  constructor(name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
  }
  
  // sayHello() {
  //   console.log(`Hello, my name is ${this.name}`);
  // }
  veto(){
    return "No, I must disagree"
  }
}