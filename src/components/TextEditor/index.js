import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {Component} from 'react'
import './index.css'

class TextEditor extends Component {
  state = {
    italic: false,
    bold: false,
    underline: false,
    text: '',
  }

  onClickBold = () => {
    this.setState(pervState => ({bold: !pervState.bold}))
  }

  onClickItalic = () => {
    this.setState(pervState => ({italic: !pervState.italic}))
  }

  onClickUnderline = () => {
    this.setState(pervState => ({underline: !pervState.underline}))
  }

  onchangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, underline, bold, italic} = this.state
    const Bold = bold && 'bold'
    const Italic = italic && 'italic'
    const Underline = underline && 'underline'
    const BoldColor = bold && 'boldColor'
    const ItalicColor = italic && 'italicColor'
    const UnderlineColor = underline && 'underlineColor'
    return (
      <div className="container">
        <div className="both-container">
          <div className="left-container">
            <h1 className="heading">Text Editor</h1>
            <p>{underline}</p>
            <p>{bold}</p>
            <p>{italic}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="right-container">
            <ul className="nav-container">
              <li className="list">
                <button
                  type="button"
                  onClick={this.onClickBold}
                  className={`button ${BoldColor}`}
                  data-testid="bold"
                  color="#f1f5f9"
                >
                  <VscBold size={18} className="ioc" />
                </button>
              </li>
              <li className="list">
                <button
                  type="button"
                  onClick={this.onClickItalic}
                  className={`button ${ItalicColor}`}
                  data-testid="italic"
                >
                  <GoItalic size={18} className="ioc" />
                </button>
              </li>
              <li className="list">
                <button
                  type="button"
                  onClick={this.onClickUnderline}
                  className={`button ${UnderlineColor}`}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={18} className="ioc" />
                </button>
              </li>
            </ul>
            <div>
              <textarea
                type="text"
                onChange={this.onchangeText}
                value={text}
                rows="40"
                className={`Textarea ${Bold} ${Italic} ${Underline}`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
