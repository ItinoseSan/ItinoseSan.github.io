import React from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';


class App extends React.Component{

    render() {
    return (
        <div className='App'>
          <div className="Introducing">
              <h1>ItinoseSan</h1>
              <img src='pinga.jpg'></img>
              <h2>Student Developer
                  <FontAwesome
                  name='code'
                  size='1x'
                  spin
                  />
              </h2>
              <h2>
                  <FontAwesome
                      name='star'
                      size='1x'
                      spin
                  />
                  Fav Tech:Java/Ruby/Rust/Unity/Rails/React etc...
              </h2>
              <h1>About me</h1>
              <p>コード書き始めて早一年の人です。最近はサーバーサイドに興味があります。</p>
              <p>プログラミングの他に、どこか出かけたりするのが好きです。</p>
              <h1>Contact</h1>
              <h1>
                  <a href='https://github.com/ItinoseSan'><FontAwesome name='github' size='2x' /></a>
                  <a href='https://twitter.com/ItinoseVM'><FontAwesome name='twitter' size='2x' /></a>
                  <a href='https://instagram.com/itinoser321'><FontAwesome name='instagram' size='2x' /></a>
                  <a href='https://www.twitch.tv/itinose321r'><FontAwesome name='twitch' size='2x' /></a>
              </h1>
              <h1>Other links</h1>
              <h1><a href='http://itidiary.hatenablog.com/'>HatenaBlog</a>|<a href='https://qiita.com/Itinoise'>Qiita</a></h1>
              <footer>Copyright &copy; 2018 ItinoseSan All Rights Reserved.</footer>
          </div>
      </div>
    );
  }
}

export default App;
