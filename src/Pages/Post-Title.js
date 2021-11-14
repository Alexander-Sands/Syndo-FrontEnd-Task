import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostTitle extends Component {
  state = {
    option1: false,
    option2: false,
    option3: false,
    amount: 500,
    name: 'Jane Doe',
    cardNum: '',
    cvvNum: '',
  }

  // Showbox [Invest Now]  
  showBoxInvest = () => {
    const Investment = document.getElementById('investment');
    const Stap1 = document.getElementById('box-0001');
    Investment.style.display = 'flex';
    Stap1.style.display = 'block';
  }

  // Close Box Invest Now  
  closeBox = () => {
    const Investment = document.getElementById('investment');
    const Stap1 = document.getElementById('box-0001');
    const Stap2 = document.getElementById('box-0002');
    const Stap3 = document.getElementById('box-0003');
    Investment.style.display = 'none';
    Stap1.style.display = 'none';
    Stap2.style.display = 'none';
    Stap3.style.display = 'none';
  }

  // Range Amount input function
  RangeAmount = (Amount) => {
    // Determine the amount
    this.setState( () => ({amount: Amount.trim()}) );

    // Style Range
    const rangeInputs = document.getElementById('range')
    function handleInputChange(e) {
      let target = e.target
      if (e.target.type !== 'range') {
        target = document.getElementById('range')
      } 
      const min = target.min
      const max = target.max
      const val = target.value  
      target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    }
    rangeInputs.addEventListener('input', handleInputChange);
    
    // Style bubble Range
    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
      const range = wrap.querySelector(".range");
      const bubble = wrap.querySelector(".output");
      setBubble(range, bubble);
    });

    function setBubble(range, bubble) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      const newVal = Number(((val - min) * 100) / (max - min));
      bubble.innerHTML = val + " EGP";

      bubble.style.left = `calc(${newVal}%)`;
    }
  }

  // Moving from the first step to the second
  Next1 = (e) => {
    e.preventDefault();
    const Stap1 = document.getElementById('box-0001');
    const Stap2 = document.getElementById('box-0002');
    Stap1.style.display = 'none';
    Stap2.style.display = 'block';
  }
  // Moving from the second to the third step
  Next2 = (e) => {
    e.preventDefault();

    const Stap2 = document.getElementById('box-0002');
    const Stap3 = document.getElementById('box-0003');
    
    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiresDate = document.getElementById('expiresDate').value;
    const cvv = document.getElementById('cvv').value;

    if (name === '') {
      alert("Sorry, Your name is required to complete the process");
    } if (cardNumber === '') {
      alert("Sorry, Your card Number is required to complete the process");
    } if (cardNumber.length < 16) {
      alert("Check the card number again");
    } if (expiresDate === '') {
      alert("Sorry, Expiry Date is required to complete the process");
    } if (cvv.length < 3) {
      alert("CVV must not be less than three numbers");
    } else {
      Stap2.style.display = 'none';
      Stap3.style.display = 'block';
    }
  }

  // Back from the second step to the first
  BackStep = (e) => {
    e.preventDefault();
    const Stap1 = document.getElementById('box-0001');
    const Stap2 = document.getElementById('box-0002');
    Stap1.style.display = 'block';
    Stap2.style.display = 'none';
  }

  // option 1, option 2, option 3 
  checkbox1 = () => this.setState( () => ( (this.state.option1) ? ({option1: false}) : ({option1: true})));
  checkbox2 = () => this.setState( () => ( (this.state.option2) ? ({option2: false}) : ({option2: true})));
  checkbox3 = () => this.setState( () => ( (this.state.option3) ? ({option3: false}) : ({option3: true})));


  // Check Cardholder name
  NameUser = (Name) => this.setState(() => ({name: Name.trim()}));
  // Check Card Number
  CardNum = (Num) => {
    if(!isNaN(Num)) {
      this.setState(() => ({cardNum: Num.trim()}));
    }
  }
  // Check CVV
  CVVNum = (CVV) => {
    if(!isNaN(CVV)){
      this.setState( () => ( {cvvNum: CVV.trim()} ) );
    }
  }

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
                        <button id="InvestNow" className="button-style-2" onClick={() => this.showBoxInvest()}>Invest Now</button>
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

        {/* Start Investment */}
        <form id="investment" className="investment">
          {/* Start Stap 1 */}
          <div id="box-0001" className="investment-box">
            <i className="fas fa-times close" onClick={() => this.closeBox()}></i>
            <div className="content">
              <h2>Investment Request</h2>
              <div className="steps">
                <p className="bold">Investment</p>
                <p>Pay</p>
              </div>
              <div className="request">
                <div className="balance">
                  <p>Current Available Balance</p>
                  <p className="bold">50,000 EGP</p>
                </div>
                <div className="range-wrap">
                  <p>Amount (request)</p>
                  <input id="range" className="range" type="range" name="range" min="500" max="100000" step="100" value={this.state.amount} onChange={(e) => this.RangeAmount(e.target.value)} />
                  <span className="output">{this.state.amount + " EGP"}</span>
                </div>
                <div className="roi">
                  <p>Expected ROI</p>
                  <p className="bold">{this.state.amount/5 + " EGP"}</p>
                </div>
                <div className="risk">
                  <h3>Risk Disclaimer</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className="terms">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" checked={this.state.option1 !== false} onChange={e => this.checkbox1(e.target.value)} />
                    <span>By clicking <b>Next</b> you agree to syndo's <b>terms</b></span>
                  </label>
                </div>
              </div>
              <div className="post-summary">
                <h3>Post Summary</h3>
                <p>Post</p>
                <p className="bold">Post Title</p>
                <p>Tenor</p>
                <p className="bold">2 months</p>
                <p>Tolal raised</p>
                <p className="bold">50,000 EGP (40%) of 250,000 EPG</p>
                <p>Expected Net ROL</p>
                <p className="bold">2%</p>
                <div></div>
              </div>
            </div>
            <div className="btn-request">
              <button onClick={() => this.closeBox()}>Cancel</button>
              <button className="next" disabled={this.state.option1 === false} onClick={(e) => this.Next1(e)}>Next</button>
            </div>
          </div>
          {/* End Stap 1 */}
          {/* Start Stap 2 */}
          <div id="box-0002" className="investment-box">
            <i className="fas fa-times close" onClick={() => this.closeBox()}></i>
            <div className="content">
              <h2>Investment Request</h2>
              <div className="steps">
                <p className="bold">Investment</p>
                <p className="bold">Pay</p>
              </div>
              <div className="request">
                <div className="balance">
                  <p>Investment Amount</p>
                  <p>{this.state.amount + " EGP"}</p>
                </div>
                <p>Please enter your card details to secure investment.</p>
                <p> Cash will only be deducted on campaign completion.</p>
                <div className="form">
                  <label>Cardholder name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" value={this.state.name} onChange={(e) => this.NameUser(e.target.value)} required/>
                  <label>Card Number</label>
                  <input type="password" id="cardNumber" name="cardNumber" maxLength="16" placeholder="Card Number" value={this.state.cardNum} onChange={(e) => this.CardNum(e.target.value)} required></input>
                  <label>Expiry date</label>
                  <input type="month" id="expiresDate" name="expiresDate" placeholder="MM / YY" required/>
                  <label>CVV</label> 
                  <input type="password" id="cvv" maxLength="3" name="cvv" placeholder="CVV" value={this.state.cvvNum} onChange={(e) => this.CVVNum(e.target.value)} required />
                </div>
                <div className="terms">
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" checked={this.state.option2 !== false} onChange={e => this.checkbox2(e.target.value)} />
                    <span>Save card for future investments</span>
                  </label>
                  <label className="form-control">
                    <input type="checkbox" name="checkbox" checked={this.state.option3 !== false} onChange={e => this.checkbox3(e.target.value)} />
                    <span>By clicking <b>Invest</b> you agree to syndo's <b>terms</b></span>
                  </label>
                </div>
              </div>
              <div className="post-summary">
                <h3>Post Summary</h3>
                <p>Post</p>
                <p className="bold">Post Title</p>
                <p>Tenor</p>
                <p className="bold">2 months</p>
                <p>Tolal raised</p>
                <p className="bold">50,000 EGP (40%) of 250,000 EPG</p>
                <p>Expected Net ROL</p>
                <p className="bold">2%</p>
                <div></div>
              </div>
            </div>
            <div className="btn-request">
              <button onClick={(e) => this.BackStep(e)}>Back</button>
              <button className="next" disabled={this.state.option3 === false} onClick={(e) => this.Next2(e)}>{"Invest " + (this.state.amount) + " EGP"}</button>
            </div>
          </div>
          {/* End Stap 2 */}
          {/* Start Stap 3 */}
          <div id="box-0003" className="investment-box">
            <i className="fas fa-times close" onClick={() => this.closeBox()}></i>
            <div className="content">
              <div className="request">
                <div className="successfully">
                <h2 className="text-center">Thanks you!</h2>
                </div>
                <div className="successfully">
                  <p>Your invesrmnet request is created successfully.</p>
                </div>
                <div className="successfully">
                  <p>Investment Ref.</p>
                  <p className="bold">#SYINV000001</p>
                </div>
                <div className="successfully">
                  <p>Investment Amount.</p>
                  <p className="bold">{this.state.amount + " EGP"}</p>
                </div>
                <div className="successfully">
                  <p>Post</p>
                  <p className="bold">Post Title</p>
                </div>
                <div className="successfully">
                  <p>Investment Agreements</p>
                  <a href="#" className="bold">Download here</a>
                </div>
                <div className="successfully">
                  <p>Investment amount will be deducted automatically on post completion, you can cancel your investment before completion form <a href="#">here</a></p>
                </div>
              </div>
            </div>
            <div className="btn-request">
              <button className="next" onClick={() => this.closeBox()}>Close</button>
            </div>
          </div>
          {/* End Stap 3 */}
        </form>
        {/* End Investment */}

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