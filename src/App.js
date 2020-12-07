import "./App.css";

function App() {
  let sheetUrl = `https://docs.google.com/spreadsheets/d/1DjpZ26_L60k9V_06X7PhWqcW7b5HoIUNBVtF39LuuGY/edit?usp=sharing`;
  /////////
  let sheetID = `1DjpZ26_L60k9V_06X7PhWqcW7b5HoIUNBVtF39LuuGY`;
  /////////////
  let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;
  //////////
  const getProjects =()=> {
    fetch({sheetAsJSON})
      .then(response => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
    
    
        return Promise.reject(new Error(response.statusText));
      })
      .then(response => response.json())
      .then(result => {
        // custom error
      })
      .catch(error => {
        // common error
        return null;
      });
  }

  return (
    <>
    <div className="App">
      <header>
        <nav id="nav">
          Welcome
          <div class="link">
            <a href="about.html">About</a>
          </div>
          <div class="link">
            <a href="contact.html">Contact</a>
          </div>
          <div id="hamburger">☰</div>
        </nav>
      </header>
      <section id="main">
        <div id="main-img"></div>
        <span id="name">
          <p> Hello, im Quinton Lythgoe</p>
        </span>
        <div id="container">
          <div id="html">HTML</div>
          <div id="JS">JS</div>
          <div id="CSS">CSS</div>
        </div>
      </section>

      <section id="about">
        <h1>ABOUT</h1>
        <div class="pic"></div>
        <br />
        <p>
          {" "}
          My name is Quinton Lythgoe and i am an aspiring web developer and this
          is my page.Here are some examples of my work starting back to when i
          was just learning HTML & CSS
        </p>
      </section>

      <section>
        <div id="pics"></div>
      </section>

      <section id="contact">
        <h1>Contact ME</h1>
        <h2>Contact me</h2>
        <br />
        <p>
          Please if you have any reviews,critique,compliments of me or my work,
          leave it here for others to see
          <br />
          (constructive criticism is welcome)
        </p>
        <br />
        <p>
          Please submit your user information where asked and leave your
          comments below{" "}
        </p>
        <form>
          <input class="input" id="user" type="text" placeholder='username'/>
          <button class="contact-button">Submit</button>
          <br />
          <input class="input" id="email" type="text" placeholder='email'/>
          <button class="contact-button">Submit</button>
          <br />
          <input class="input" id="words" type="text" placeholder='comments here'/>
          <button class="contact-button">Submit</button>
        </form>
      </section>
    </div>
    </>
  );
}

export default App;
