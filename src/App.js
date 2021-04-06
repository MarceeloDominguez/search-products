import { Component } from "react";
import Results from "./components/Results";
import Search from "./components/Search";
import './css/error.css'
import { FaSearchPlus } from 'react-icons/fa'

class App extends Component {

  state = {
    input: '',
    items: [],
    usarBuscador: false
  }

  searchData = (input) => {
    this.setState({
      input,
      usarBuscador: true
    }, () => {
      this.handleApi()
    })
  }

  handleApi = async () => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${this.state.input}`
    const data = await fetch(url)
    const response = await data.json(url)
    //console.log(response)
    return this.setState({ items: response.results })
  }

  handleResults = () => {
    return this.state.items.length === 0 ?
      <div className='card-error'>
        <FaSearchPlus className='search-plus' />
        <div className='error'>{`El producto ${this.state.input} no existe.`}
          <ul>
            <li><b>Revisá la ortografía</b> de la palabra.</li>
            <li>Utilizá <b>palabras más genéricas</b> o menos palabras.</li>
            <li>Navegá por las categorías para encontrar un producto similar</li>
          </ul>
          </div>
      </div>
      : <Results items={this.state.items} />
  }

  render() {
    return (
      <div>
        <Search searchData={this.searchData} />
        {/* <Results items={this.state.items}/> */}
        {
          this.state.usarBuscador ? this.handleResults() : ''
        }
      </div>
    )
  }
}

export default App;
