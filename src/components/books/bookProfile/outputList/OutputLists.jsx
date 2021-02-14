import React, {Component} from 'react'
import './OutputLists.css'
import { addToListCompleted, addToListPlanned, addToListWanted,removeFromList } from '../../../../helpers/books';


class OutputLists extends Component {
 state={
   completedBooks:[],
   plannedBooks:[],
   wantedBooks:[],
   error: null
 }

 onClickHandlerCompleted = async (e) => {
  e.preventDefault();
  const {value} = e.target;

  try {
 
    this.setState({error: null})
     const complResult = await addToListCompleted({bookId:value});
    this.setState({completedBooks:complResult})
  } catch (error) {
    this.setState({error:error.message})
  }
};

onClickHandlerPlanned = async (e) => {
  e.preventDefault();
  const {value} = e.target;

  try {
   
    this.setState({error: null})
     const planResult = await addToListPlanned({bookId:value});
    this.setState({completedBooks:planResult})
  } catch (error) {
    this.setState({error:error.message})
  }
};

onClickHandlerWanted = async (e) => {
  e.preventDefault();
  const {value} = e.target;

  try {
    this.setState({error: null})
     const wantResult = await addToListWanted({bookId:value});
    this.setState({completedBooks:wantResult})
  } catch (error) {
    this.setState({error:error.message})
  }
};


onClickDeletePlannedHandler=async(e)=>{
  e.preventDefault();
const {value} =e.target
  try{
    this.setState(prevState => ({
      plannedBooks: prevState.plannedBooks.filter(book => book.id !==value)
    }))
    const result = await removeFromList({bookId:value})
  }catch(error){
    this.setState({error:error.message})
  }

}

onClickDeleteCompletedHandler=async(e)=>{
  e.preventDefault();
const {value} =e.target
  try{
    this.setState(prevState => ({
     completedBooks: prevState.completedBooks.filter(book => book.id !==value)
    }))
    const result = await removeFromList({bookId:value})
  }catch(error){
    this.setState({error:error.message})
  }

}

onClickDeleteWantedHandler=async(e)=>{
  e.preventDefault();
const {value} =e.target
  try{
    this.setState(prevState => ({
      wantedBooks: prevState.wantedBooks.filter(book => book.id !==value)
    }))
    const result = await removeFromList({bookId:value})
  }catch(error){
    this.setState({error:error.message})
  }

}




// removePlanned = (id) => { 
//   const newPlannedBooks = [...this.state.plannedBooks.filter(book => book.id !== id) ];
// }
// removeCompleted = (id) => { 
//   const newCompletedBooks = [...this.state.completedBooks.filter(book => book.id !== id) ];
// }
// removeWanted = (id) => { 
//   const newWantedBooks = [...this.state.wantedBooks.filter(book => book.id !== id) ];
// }

    render () {
  
      return (
        <>
       <div className="button_container">
           <button className="aim_button" onClick={this.onClickHandlerCompleted}>Прочитанное</button>
           <button className="aim_button" onClick={this.onClickHandlerPlanned}>Хочу прочитать</button>
           <button className="aim_button" onClick={this.onClickHandlerWanted}>Хочу купить</button>
       </div>
       <div className="output_container">
         <div className="output_completed">
         {this.state.error}
          {(this.state.completedBooks || this.state.completedBooks.length === 0)
            ? 'Список еще пуст'
            : this.state.searchResult.map(complResult => <p>{complResult.title} <button className="delete"  onClick={this.onClickDeleteCompletedHandler}>Удалить</button></p>)
          }
         </div>
         <div className="output_planned">
         {this.state.error}
          {(this.state.plannedBooks || this.state.plannedBooks.length === 0)
            ? 'Список еще пуст'
            : this.state.searchResult.map(planResult => <p>{planResult.title} <button className="delete"  onClick={this.onClickDeletePlannedHandler}>Удалить</button></p>)
          }
         </div>
         <div className="output_wanted">
         {this.state.error}
          {(this.state.wantedBooks || this.state.wantedBooks.length === 0)
            ? 'Список еще пуст'
            : this.state.searchResult.map(wantResult =><p>{wantResult.title} <button className="delete" onClick={this.onClickDeleteWantedHandler}>Удалить</button></p> )
          }
         </div>
       </div>
       </>

      );
    }
  }
  
  export default OutputLists;