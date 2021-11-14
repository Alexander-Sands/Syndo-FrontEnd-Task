import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    Nav: false
  }
  // Toggle Menu
  showNav = () => {
    const likes = document.querySelector('header ul');
    if (this.state.Nav === false) {
      likes.style.display = 'block';
      this.setState(() => ({Nav: true}));
    } else {
      likes.style.display = 'none';
      this.setState(() => ({Nav: false}));
    }
  }
  render() {
    return (
      <div className="Home black-style">

        {/* Start Header  */}
        <header>
          <div className="container">
            <Link className="logo" to='/'>Synd<span>o</span></Link>
            <nav>
              <i className="fas fa-bars toggle-menu" onClick={(e) => this.showNav(e)}></i>
              <ul>
                <li><Link to='/Posts' >Posts</Link></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Login</a></li>
                <li><a className="nav-button" href="#">Get started</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {/* End Header */}
        
        {/* Start Landing */}
        <div className="landing">
          <div className="content">
            <div className="container">
              <h2>Built by the Crowd for the Crowd</h2>
              <h3>The Leading Digital<br/> Donations Platform in Egypt</h3>
              <p>The Leading Digital Donations Platform in Egypt</p>
              <a className="get-started" href="#">Get started</a>
            </div>
          </div>
          <img src="images/Capture.PNG" alt="" />
        </div>
        {/* End Landing */}

        {/* Start Posts */}
        <div className="section posts">
          <div className="container">
            <h2 className="main-title">
              Explore Posts
              <Link className="chevron" to='/Posts' ><i className="fas fa-chevron-right"></i></Link>
            </h2>
            <div className="content">
              {/* Start Post 1 */}
              <Link className="post" to='/Posts/Post-Title'>
                <img className="img" src="https://via.placeholder.com/260x150.png/f0e0f0/111?text=A" title="" />
                <div className="cont">
                  <h3>
                    Post title
                    <span>Till 11/10/2021</span>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="progress"><span style={{width: '60%'}}></span></div>
                  <div className="table">
                    <div>Funding Goal</div>
                    <div>Interest rate</div>
                    <div>Tenor</div>
                    <div className="bold">1,000,000</div>
                    <div className="bold">12%</div>
                    <div className="bold">12 months</div>
                    <div>Total Invested</div>
                    <div>Investors</div>
                    <div>Skin in The game</div>
                    <div className="bold">EGP 500,000</div>
                    <div className="bold">5</div>
                    <div className="bold">5%</div>
                  </div>
                  <button>Loan</button>
                  <button>Inustry</button>
                </div>
              </Link>
              {/* End Post 1 */}
              {/* Start Post 2 */}
              <Link className="post" to='/Posts/Post-Title'>
                <img className="img" src="https://via.placeholder.com/260x150.png/f0f0e0/111?text=B" title="" />
                <div className="cont">
                  <h3>
                    Post title
                    <span>Till 11/10/2021</span>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="progress"><span style={{width: '60%'}}></span></div>
                  <div className="table">
                    <div>Funding Goal</div>
                    <div>Interest rate</div>
                    <div>Tenor</div>
                    <div className="bold">1,000,000</div>
                    <div className="bold">12%</div>
                    <div className="bold">12 months</div>
                    <div>Total Invested</div>
                    <div>Investors</div>
                    <div>Skin in The game</div>
                    <div className="bold">EGP 500,000</div>
                    <div className="bold">5</div>
                    <div className="bold">5%</div>
                  </div>
                  <button>Loan</button>
                  <button>Inustry</button>
                </div>
              </Link>
              {/* End Post 2 */}
              {/* Start Post 3 */}
              <Link className="post" to='/Posts/Post-Title'>
                <img className="img" src="https://via.placeholder.com/260x150.png/f0e0f0/111?text=A" title="" />
                <div className="cont">
                  <h3>
                    Post title
                    <span>Till 11/10/2021</span>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="progress"><span style={{width: '60%'}}></span></div>
                  <div className="table">
                    <div>Funding Goal</div>
                    <div>Interest rate</div>
                    <div>Tenor</div>
                    <div className="bold">1,000,000</div>
                    <div className="bold">12%</div>
                    <div className="bold">12 months</div>
                    <div>Total Invested</div>
                    <div>Investors</div>
                    <div>Skin in The game</div>
                    <div className="bold">EGP 500,000</div>
                    <div className="bold">5</div>
                    <div className="bold">5%</div>
                  </div>
                  <button>Loan</button>
                  <button>Inustry</button>
                </div>
              </Link>
              {/* Start Post 3 */}
              {/* Start Post 4 */}
              <Link className="post" to='/Posts/Post-Title'>
                <img className="img" src="https://via.placeholder.com/260x150.png/f0f0e0/111?text=B" title="" />
                <div className="cont">
                  <h3>
                    Post title
                    <span>Till 11/10/2021</span>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <div className="progress"><span style={{width: '60%'}}></span></div>
                  <div className="table">
                    <div>Funding Goal</div>
                    <div>Interest rate</div>
                    <div>Tenor</div>
                    <div className="bold">1,000,000</div>
                    <div className="bold">12%</div>
                    <div className="bold">12 months</div>
                    <div>Total Invested</div>
                    <div>Investors</div>
                    <div>Skin in The game</div>
                    <div className="bold">EGP 500,000</div>
                    <div className="bold">5</div>
                    <div className="bold">5%</div>
                  </div>
                  <button>Loan</button>
                  <button>Inustry</button>
                </div>
              </Link>
              {/* Start Post 4 */}
            </div>
          </div>
        </div>
        {/* End Posts */}

        {/* Start Doers */}
        <div className="section doers">
          <div className="container">
            <h2 className="main-title">Hear it from our doers</h2>
            <div className="content">
              {/* Start Doer 1 */}
              <div className="doer">
                <q>Lorem Ipsum is simply dummy text of the printing and typesetting industry</q>
                <div className="user">
                  <img className="img" src="https://via.placeholder.com/50x50.png/f0f0e0/111?text=B" title="" />
                  <div className="info">
                    <h3>Jane Doe</h3>
                    <p>Company XYZ - CEO</p>
                  </div>
                </div>
              </div>
              {/* End Doer 1 */}
              {/* Start Doer 2 */}
              <div className="doer">
                <q>Lorem Ipsum is simply dummy text of the printing and typesetting industry</q>
                <div className="user">
                  <img className="img" src="https://via.placeholder.com/50x50.png/f0f0e0/111?text=B" title="" />
                  <div className="info">
                    <h3>Jane Doe</h3>
                    <p>Company XYZ - CEO</p>
                  </div>
                </div>
              </div>
              {/* End Doer 2 */}
              {/* Start Doer 3 */}
              <div className="doer">
                <q>Lorem Ipsum is simply dummy text of the printing and typesetting industry</q>
                <div className="user">
                  <img className="img" src="https://via.placeholder.com/50x50.png/f0f0e0/111?text=B" title="" />
                  <div className="info">
                    <h3>Jane Doe</h3>
                    <p>Company XYZ - CEO</p>
                  </div>
                </div>
              </div>
              {/* End doer 3 */}
            </div>
          </div>
        </div>
        {/* End Doers */}

        {/*Start featured */}
        <div className="section featured">
          <div className="container">
            <h2 className="main-title text-center">Featured by Industry Leaders</h2>
            <div className="content">
              {/* Start Leader */}
              <div className="leader">
                <img className="img" src="https://via.placeholder.com/250x150.png/f0f0e0/111?text=B" title="" />
                <img className="img" src="https://via.placeholder.com/250x150.png/f0f0e0/111?text=B" title="" />
                <img className="img" src="https://via.placeholder.com/250x150.png/f0f0e0/111?text=B" title="" />
                <img className="img" src="https://via.placeholder.com/250x150.png/f0f0e0/111?text=B" title="" />
                <img className="img" src="https://via.placeholder.com/250x150.png/f0f0e0/111?text=B" title="" />
              </div>
              {/* End Leader */}
              {/* Start Angles */}
              <ul className="angles">
                  <li><i className="fas fa-angle-left fa-2x chevron"></i></li>
                  <li><i className="fas fa-angle-right fa-2x chevron"></i></li>
              </ul>
              {/* End Angles */}
            </div>
          </div>
        </div>
        {/* End featured */}

        {/* Start Footer */}
        <div className="footer">
          <div className="container">

            <div className="crowd">
              <div>
                <a href="#" className="logo">Synd<span>o</span></a>
                <p>By The Crowd for The Crowd</p>
              </div>
              <div>
                <div><h3>Prodcucts</h3></div>
                <div>
                  <h3>Company</h3>
                  <a>About us</a>
                  <a>Risk</a>
                </div>
                <div>
                  <h3>Resoures</h3>
                  <a>How it Works</a>
                  <a>FAQ</a>
                </div>
              </div>
            </div>

            <div className="copyright">
              <div>
                <div>&copy; syndo 2021.All Rights Reserved</div>
                <div>Privacy Policy</div>
                <div>Legal Terms</div>
              </div>
              <div className="lang">
                <select>
                  <option>EN</option>
                  <option>AR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer */}
      </div>
    )
  }
}

export default Home