import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";

//Components
import ToDoItem from "./components/ToDoItem";
import ToDoCategory from "./components/ToDoCategory";
import Categories from "./components/AddCategories"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
      items: [],
      category: '',
      categories: []
    };

    this.removeItem = this.removeItem.bind(this);

    this.setCategories= this.setCategories.bind(this);
    this.addCategory = this.addCategory.bind(this);

    this.submit = this.submit.bind(this);

    this.titleValue = this.titleValue.bind(this);
    this.descValue = this.descValue.bind(this);
  }
  
  removeItem(id){
    this.setState({
      items: this.state.items.filter(item => item.id != id)
    })
    console.log(id)
  }

  addCategory(e){ 
    e.preventDefault();
  
    this.setState({
      category: e.target.value
    });
    console.log(this.state.category);
  }


  setCategories(e){
    e.preventDefault();

    if(this.state.category === ''){
      return ;
    }

    this.setState({
      categories: this.state.categories.concat(this.state.category)
    })

    console.log(this.state.categories);
  }

  submit(e, category) {
    e.preventDefault()
    if (this.state.title === "" && this.state.desc === "") {
      return;
    }

    const newItem = {
      category: category,
      id: Math.round(Date.now() / 1000),
      title: this.state.title,
      desc: this.state.desc,
    };

    this.setState({
      title: "",
      desc: "",
      items: this.state.items.concat(newItem),
    });

    console.log(this.state);
  }




  titleValue(e) {
    e.preventDefault();

    this.setState({
      title: e.target.value,
    });

    console.log(this.state);
  }

  descValue(e) {
    e.preventDefault();

    this.setState({
      desc: e.target.value,
    });
    console.log(this.state);
  }


  

  render() {
    return (
      <>
        <header className="header">
          <Container>
            <h1>To Do App</h1>
          </Container>
        </header>
        <section>
          <div className="Container">
            {this.state.categories.map((category, index) =>{
              return (<ToDoCategory
                key={index}
                submit={this.submit}
                titleValue={this.titleValue}
                descValue={this.descValue}
                category={category}
              >
                {this.state.items.filter((item, index)=> category === item.category ).map(({ id, title, desc, category }) => {
                  return <ToDoItem key={id} id={id} title={title} desc={desc} category={category} removeItem={this.removeItem}/>;
                })}
              </ToDoCategory>)
            })}
            <Categories addCategory={this.addCategory} setCategories={this.setCategories}/>
          </div>
        </section>
      </>
    );
  }
}
