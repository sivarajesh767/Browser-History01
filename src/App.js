import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace //
class App extends Component {
  state = {
    lastestHistoryList: initialHistoryList,
    searchInput: '',
    isTrue: false,
  }
  fillFunction = value => {
    const {lastestHistoryList} = this.state
    const newHistoryList = lastestHistoryList.filter(
      eachValue => eachValue.id !== value,
    )
    if (newHistoryList.length !== 0) {
      this.setState({lastestHistoryList: newHistoryList, isTrue: true})
    } else {
      this.setState({lastestHistoryList: newHistoryList})
    }
  }
  onChangeFunction = e => {
    this.setState({lastestHistoryList: e.target.value})
  }
  render() {
    const {searchInput, lastestHistoryList} = this.state
    const {isTrue} = this.state
    const newHistoryList = lastestHistoryList.filter(eachDetails =>
      eachDetails.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (newHistoryList === 0) {
      isTrue = true
    }
    return (
      <div className="background-co">
        <div className="histoty-co">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history"
          />
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <div className="searchBar1">
              <input
                type="search"
                placeholder="Search history"
                className="searchHistory"
                value={searchInput}
                onChange={this.onChangeFunction}
              />
            </div>
          </div>
          <div className="contain-holder">
            {!isTrue && (
              <ul>
                {newHistoryList.map(eachDetails => (
                  <li
                    className="items-holder"
                    key={eachDetails.id}
                    eachDetails={eachDetails}
                  >
                    <p className="time">{eachDetails.timeAccessed}</p>
                   
                    <img 
                      src={eachDetails.logoUrl}
                      alt="domain logo"
                      className="logo-element"
                    />
                    <p>{eachDetails.title}</p>
                    <p>{eachDetails.domainUrl}</p>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={this.fillFunction}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="delete"
                        className="delete1"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
         
          
        </div>
        {isTrue && (
          <div>
          <p>There is a no history</p>
          </div>

        )}
      </div>
    )
  }
}

export default App
