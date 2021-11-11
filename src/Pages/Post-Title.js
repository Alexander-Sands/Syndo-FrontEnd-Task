import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostTitle extends Component {
  render() {
    return (
      <div className="PostsTitle-Page white-style">

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

        {/* Start PostsTitle */}
        <div className="section PostsTitle">
          <div className="container">
            <div className="anchors">
                <Link to='/'>Home</Link>
                <i className="fas fa-chevron-right angle"></i>
                <Link to='/Posts/'>Posts</Link>
                <i className="fas fa-chevron-right angle"></i>
                <span>Post Title</span>
            </div>
            <div className="content">
                <div className="info">
                    <div className="invest">
                        <img className="img" src="https://via.placeholder.com/120x90.png/f0f0f0/111?text=B" title="" />
                        <h2>Post Title</h2>
                        <p>100,000 EGP raised</p>
                        <button className="button-style-1">Loan</button>
                        <button className="button-style-1">Inustry</button>
                        <div className="social">
                            <a href="#"><i className="fas fa-globe"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <button className="button-style-2">Invest Now</button>
                    </div>
                    <ul className="tabs">
                        <li>Pitch</li>
                        <li className="active">Company</li>
                    </ul>
                    <div className="pitch"></div>
                    <div className="company">
                        <div>
                            <h3>About the Company</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div>
                            <h3>Products and Sevices</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div>
                            <h3>Competitive Landscape</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="size">
                            <h3>Company Size</h3>
                            <p>11-50 Employess</p>
                        </div>
                        <div className="business">
                            <h3>Business Model</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <img className="img" src="https://via.placeholder.com/300x150.png/f0f0f0/111?text=B" title="" />
                        </div>
                        <div>
                            <h3>Traction</h3>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Number of customers</span>
                            </div>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Active users</span>
                            </div>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Potential users</span>
                            </div>
                        </div>
                        <div>
                            <h3>Financial Performance</h3>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Sales Turnover</span>
                            </div>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Gross Profit Margin</span>
                            </div>
                            <div className="count">
                                <span className="num">0</span>
                                <span className="text-count">Company Valuation</span>
                            </div>
                            <div className='graph'>
                                <div>
                                    <img src="../images/graph-1.png" alt="" />
                                    <p>Graph 1</p>
                                </div>
                                <div>
                                    <img src="../images/graph-2.png" alt="" />
                                    <p>Graph 2</p>
                                </div>
                            </div>
                        </div>
                        <div className='clients'>
                            <h3 className="text-center">Key Clients</h3>
                            <div className='client'>
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=A" title="" />
                                <h4>Client 1</h4>
                            </div>
                            <div className='client'>
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=A" title="" />
                                <h4>Client 2</h4>
                            </div>
                            <div className='client'>
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=A" title="" />
                                <h4>Client 3</h4>
                            </div>
                        </div>
                        <div className="teams">
                            <h3 className="text-center">Founding Team</h3>
                            <div className="team">
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=B" title="" />
                                <h4>Name</h4>
                                <p>Job Title</p>
                            </div>
                            <div className="team">
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=B" title="" />
                                <h4>Name</h4>
                                <p>Job Title</p>
                            </div>
                            <div className="team">
                                <img className="img" src="https://via.placeholder.com/130x90.png/f0f0f0/111?text=B" title="" />
                                <h4>Name</h4>
                                <p>Job Title</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advertisement">
                    <div className="post">
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
                    </div>
                    <img className="img" src="https://via.placeholder.com/260x150.png/f0e0f0/111?text=A" title="" />
                    <img className="img" src="https://via.placeholder.com/260x150.png/e0f0f0/111?text=B" title="" />
                </div>
            </div>
          </div>
        </div>
        {/* End PostsTitle */}

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
  
export default PostTitle