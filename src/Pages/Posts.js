import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {
  render() {
    return (
      <div className="Posts-Page white-style">

        {/* Start Header  */}
        <header>
          <div className="container">
            <Link className="logo" to='/'>Synd<span>o</span></Link>
            <div className="user">
                <img className="img" src="https://via.placeholder.com/50x50.png/a0f0f0/111?text=B" title="" />
                <div className="info">
                  <h3>Jane Doe</h3>
                  <p>Logout</p>
                </div>
            </div>
          </div>
        </header>
        {/* End Header */}

        {/* Start Posts */}
        <div className="section posts">
          <div className="container">
            <div className="filter">
              <h2>Posts</h2>
              <p>Scout. Invest. Repeat.</p>
              <form className="control">
                <input type="search" name="search" placeholder="Type to search" />
                <input type="search" name="status" placeholder="Status" list="status" />
                <datalist id="status">
                  <option value="Status 1"></option>
                  <option value="Status 2"></option>
                  <option value="Status 3"></option>
                </datalist>
                <input type="search" name="type" placeholder="Type" list="type" />
                <datalist id="type">
                  <option value="Type 1"></option>
                  <option value="Type 2"></option>
                  <option value="Type 3"></option>
                </datalist>
                <input type="search" name="funded" placeholder="Most Funded" list="funded" />
                <datalist id="funded">
                  <option value="Most Funded 1"></option>
                  <option value="Most Funded 2"></option>
                  <option value="Most Funded 3"></option>
                </datalist>
              </form>
            </div>
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

export default Posts