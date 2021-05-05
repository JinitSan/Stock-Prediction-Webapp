import React from 'react';
class Homepage extends React.Component{
    render(){
    return (
    <div class="main-layout"> 
    <div class="loader_bg">
         <div class="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>
      <header>
         <div class="header_bg">
            <div class="header">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div class="full">
                           <div class="center-desk">
                              <div class="logo">
                                 <a href="index.html"><img src="images/logo.jpg" alt="#" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section class="banner_main">
               <div class="container-fluid">
                  <div class="row d_flex">
                     <div class="col-md-5">
                        <div class="text-bg">
                           <span>Stock Prediction </span>
                           <p>share market is the aggregation of buyers and sellers of stocks, which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately. Investment in the stock market is most often done via stockbrokerages and electronic trading platforms </p>
                           <a href="#">Get Started</a>
                        </div>
                     </div>
                     <div class="col-md-7">
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </header>
      <br>
      </br>
      <div id="service" class="three_box">
         <div class="container">
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src="images/service1.png" alt="#" /></i>
                     <h3>Growth Stocks</h3>
                     <p>These stocks do not pay high dividends as the company prefers to reinvest the earnings to enable it to grow faster, hence, the name growth stocks</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src="images/service2.png" alt="#" /></i>
                     <h3>Income Stocks</h3>
                     <p>income stocks hand out a higher dividend in relation to the price of the share. Higher dividends translates to higher income, hence, the name Income Stocks</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src="images/service3.png" alt="#" /></i>
                     <h3>Hybrid Stocks</h3>
                     <p>There are companies that offer preferred shares with the option of converting them to common shares, with conditions, at a certain point in time.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div id="why" class="weare">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Who <span class="white">We Are</span></h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div class="main_weare">
                     <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div id="box_ho" class="weare-img_box">
                              <figure><img src="images/frontend1.png" alt="#" /></figure>
                           </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div class="weare-box">
                              <h3>Frontend Developer</h3>
                              <p>A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging.</p>
                              <a class="read_more bg" href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="main_weare2 ">
                     <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                           <div id="box_ho" class="weare-img_box">
                              <figure><img src="images/index.png" alt="#" /></figure>
                           </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                           <div class="weare-box">
                              <h3>Backend Developer</h3>
                              <p>A back-end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.</p>
                              <a class="read_more bg" href="#">Read More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="testimonial">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Clients <span class="white">Section</span></h2>
                  </div>
               </div>
            </div>
            <section id="demos">
               <div class="row">
                  <div class="col-md-12">
                     <div class="owl-carousel owl-theme">
                        <div class="item">
                           <span></span>
                           <h3>Powergrid InvIT IPO</h3>
                           <p>Powergrid InvIT (Infrastructure Investment Trust) owns, construct, operate, maintain and invest in power transmission assets in India. Powergrid InvIT registered with SEBI as an InvIT on January 7, 2021.
                              The POWERGRID InvIT IPO April 2021 open date is Apr 29, 2021, and the close date is May 3, 2021. 
                           </p>
                        </div>
                        <div class="item">
                           <span></span>
                           <h3>Kuberan Global Edu Solutions IPO</h3>
                           <p>The company follows Kuberan class (virtual learning concept) through the use of IT to offer courses via online teaching and classroom environment. Online web conferencing, video conferencing chat rooms, Voice over IP are used to provide e-learning facilities to clients.</p>
                        </div>
                        <div class="item">
                           <span></span>
                           <h3>Lodha Developers IPO</h3>
                           <p>Macrotech Developers [Formerly known as Lodha Developers] is the largest real estate developer in India. The company is primarily engaged in affordable residential real estate developments and in 2019, it entered into the development of logistics and industrial parks</p>
                        </div>
                        <div class="item">
                           <span></span>
                           <h3>Jetmall spices and masala IPO</h3>
                           <p>Incorporated in 2012, Jetmall Spices and Masala Limited is engaged in the trading and marketing activities of spices, food products, masalas, and dry fruits. Its product portfolio includes ready-to-eat foods, food grains, nuts, dry fruits, food ingredients, processed foods, food stuffs, etc.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
      <div  class="asked_main">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Frequently Asked <span class="white"> Questions</span></h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <div class="col-md-6">
                  <div class="ask_img">
                     <figure><img src="images/faq.png" alt="#"/></figure>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="ask_box">
                     <div class="simpaly">
                        <div class="slider"><span>+</span><a href="#">
                           Who is a broker? </a>
                        </div>
                        <div class="content">
                           <p> A broker is a member of a stock exchange, who is permitted to do equity trades in there.  Broker is enrolled member of the exchange and is registered with SEBI.
                              In other word broker is an intermediate person (or a company) between an investor and a stock exchange. They buy & sell shares and other securities for investors in stock market.
                              Please note that an investor cannot direct deal with stock exchange.
                           </p>
                        </div>
                     </div>
                     <div class="simpaly">
                        <div class="slider"><span>+</span><a href="#">
                           I have lost the share certificates I was holding for XYZ Company. How do I get duplicate share certificates?</a>
                        </div>
                        <div class="content">
                           <p> Registrar of the company usually helps in resolving this kind of issues.
                              If you know the registrar of the company, contact then with your quires.
                              If you do not know the registrar of the company, visit ‘Investor Relations' section of the company's website or contact the company and ask them about the registrar handing their share. 
                           </p>
                        </div>
                     </div>
                     <div class="simpaly">
                        <div class="slider"><span>+</span><a href="#">
                           What is P/E ratio?</a>
                        </div>
                        <div class="content">
                           <p> In terms of an IPO, P/E is the issue price divided by the most recent Earning Per Share EPS. This ratio tells you if the issue is under-priced or over-priced vis-à-vis the industry P/E. All other things being equal, if the P/E of the company is less than the industry P/E then the issue is under-priced. If the P/E of the company is higher, then the issue is over-priced. 
                           </p>
                        </div>
                     </div>
                     <div class="simpaly">
                        <div class="slider"><span>+</span><a href="#">
                           How is SENSEX decided?</a>
                        </div>
                        <div class="content">
                           <p> Sensex, a stock market indexes was launched in 1986 by BSE (Bombay Stock Exchange). It evaluates the fluctuations in stock prices of 30 big companies in terms of market value, turnover, profit etc. The value of the Sensex is calculated on every minute basis. If the Sensex is going up that means the stock price of most companies of BSE is increasing and if the Sensex is going down that means the share price of most BSE companies is decreasing. The base year of the Sensex is 1978-79 and the base index value was set at 100. 
                           </p>
                        </div>
                     </div>
                     <div class="simpaly">
                        <div class="slider"><span>+</span><a href="#">
                           What is MID CAP?</a>
                        </div>
                        <div class="content">
                           <p> According to the current market, companies are categories in large-cap, mid-cap and small-cap companies. Company's capitalization is calculated on the basis of the total number of its outstanding shares in the market multiplied by the current price per share. 
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
      <div id="contact" class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="titlepage">
                     <h2>Contact <span class="white">Us</span></h2>
                  </div>
                  <div class="cont">
                     <span>please share with us <br/>
                     your experience</span>
                  </div>
               </div>
               <div class="col-md-6">
                  <form class="main_form">
                     <div class="row">
                        <div class="col-sm-12">
                           <input class="contactus" placeholder="Full Name" type="text" name="
                              Full Name" />
                        </div>
                        <div class="col-sm-12">
                           <input class="contactus" placeholder="Email" type="text" name=" Email" />
                        </div>
                        <div class="col-sm-12">
                           <input class="contactus" placeholder="Phone" type="text" name="Phone" />
                        </div>
                        <div class="col-sm-12">
                           <textarea class="textarea" placeholder="Message" type="text" name="Message"></textarea>
                        </div>
                        <div class="col-sm-12">
                           <button class="send">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
        </div>    
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <p>© 2021 All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
</div>
</div>
        );
    }
}

export default Homepage;
