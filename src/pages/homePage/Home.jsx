import React from 'react'
import logo from '../../assets/logo.svg'
import aboutUS from '../../assets/aboutUs.jpg'
import navigate from '../../assets/navigate.png'
import adapt from '../../assets/adapt.png'
import unlock from '../../assets/unlock.png'
import dreamyoung from '../../assets/dreamyoung.png'
import grace from '../../assets/grace.png'
import david from '../../assets/david.png'
import james from '../../assets/james.png'
import adebayo from '../../assets/adebayo.png'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div>
    <header className="top-header">
      <nav>
        <div className="header-logo">
          <Link to="/" className="link-bottom-btn">
            <img src={logo} alt="logo" />
          </Link>
          <span style={{'display':'none'}}>
            <button type="button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </span>
        </div>
        <div className="nav-sign-login-header">
            <div className="nav-list">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/">What we do</Link>
                    </li>
                    <li>
                    <Link to="/">About Us</Link>
                    </li>
                    <li>
                    <Link to="/">Blog</Link>
                    </li>
                    <li>
                    <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="login-signup-head">
                <div className="login">
                    <Link to="/">
                    <button type="button">Log In</button>
                    </Link>
                </div>
                <div className="signup">
                    <Link to="/signup">
                    <button type="button">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
      </nav>
      <div className="home-header">
        <div className="hero-section">
          <div className="hero-one hero">
            <h1>Empowering Farmers Through <br /> Technology</h1>
          </div>
          <div className="hero-two hero">
            <p>Unlock the full potential of your farm with
              real-time data, expert advice, and a community 
              of like-minded individuals dedicated to shaping 
              the future of agriculture.</p>
          </div>
        </div>
        <div className="get-started">
          <Link>
            <button className="click-btn get-started-btn">Get Started!</button>
          </Link>
        </div>
      </div>
      <div className="numbers-header">
        <div className="numbers-list">
          <ul>
            <li>
              <p>10+</p>
              <span>Countries</span>
            </li>
            <li>
              <p>50+</p>
              <span>Happy Clients</span>
            </li>
            <li>
              <p>15+</p>
              <span>Years Experience</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main className="main-body">
        <div className="main-header">
            <div className="what-we-do-head">
                <p>What We Offer</p>
                <p>Cultivating Success Through Innovation</p>
            </div>
            <div className="offer-header">
                <div className="offer-flex">
                    <div className="crop-card offer-card">
                        <div className="card-icon">
                            <svg width="46" height="36" viewBox="0 0 46 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.5143 22.3257C35.716 23.4189 33.6506 23.9938 31.5462 23.987C29.7832 23.973 28.0401 23.6124 26.4162 22.9257C25.1647 24.6926 24.4949 26.8055 24.4999 28.9707V34.5001C24.5004 34.7057 24.4586 34.9093 24.377 35.0981C24.2955 35.2868 24.1761 35.4569 24.0261 35.5975C23.8761 35.7382 23.6988 35.8465 23.5052 35.9158C23.3115 35.985 23.1058 36.0137 22.9006 36.0001C22.515 35.9666 22.1564 35.7885 21.8966 35.5016C21.6369 35.2147 21.4952 34.8402 21.4999 34.4532V32.1207L14.2587 24.8795C13.1823 25.2811 12.0438 25.4911 10.8949 25.5001C9.31333 25.504 7.76133 25.0713 6.40995 24.2495C2.32432 21.767 0.124948 16.0539 0.550573 8.96074C0.572003 8.59378 0.727436 8.24746 0.987361 7.98753C1.24729 7.7276 1.59361 7.57217 1.96057 7.55074C9.0537 7.13262 14.7668 9.32449 17.2418 13.4101C18.2142 15.0115 18.6387 16.886 18.4512 18.7501C18.4395 18.8945 18.3863 19.0325 18.2979 19.1473C18.2095 19.2621 18.0897 19.3489 17.9531 19.3971C17.8164 19.4453 17.6688 19.4528 17.5279 19.4189C17.387 19.3849 17.259 19.3109 17.1593 19.2057L13.5593 15.437C13.2757 15.1676 12.8981 15.0196 12.507 15.0246C12.1158 15.0296 11.7421 15.1872 11.4655 15.4638C11.1889 15.7404 11.0313 16.1141 11.0263 16.5053C11.0213 16.8964 11.1693 17.274 11.4387 17.5576L21.5412 27.917C21.5524 27.7707 21.5656 27.6245 21.5806 27.4801C21.9086 24.699 23.1358 22.1011 25.0756 20.0814L34.5612 10.0576C34.8427 9.7764 35.0009 9.3949 35.0011 8.99703C35.0012 8.59916 34.8433 8.21751 34.5621 7.93605C34.2809 7.65459 33.8994 7.49637 33.5015 7.49619C33.1037 7.49602 32.722 7.6539 32.4406 7.93512L23.2531 17.6514C23.1611 17.7488 23.0447 17.8198 22.916 17.857C22.7873 17.8942 22.651 17.8963 22.5213 17.863C22.3915 17.8297 22.2731 17.7622 22.1782 17.6676C22.0833 17.573 22.0155 17.4548 21.9818 17.3251C21.0931 14.0476 21.4849 10.7851 23.1818 7.98387C26.5306 2.45637 34.3231 -0.502385 44.0281 0.0676154C44.395 0.0890456 44.7414 0.244479 45.0013 0.504404C45.2612 0.76433 45.4166 1.11065 45.4381 1.47762C46.0006 11.1845 43.0418 18.977 37.5143 22.3257Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Crop Management</p>
                            <p>
                                FarmBot provides personalized recommendations for
                                fertilization, irrigation, and pest control for farmers. 
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="real-chat-card offer-card">
                        <div className="card-icon">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8106 0.977633C13.9566 0.977633 9.55238 2.12626 6.29494 4.04495C3.03741 5.96382 0.863159 8.72945 0.863159 11.9085C0.863159 15.0529 2.99053 17.7969 6.18938 19.7132L3.5146 29.6651L12.6055 22.1798C14.5415 22.6091 16.6297 22.8419 18.8105 22.8419C23.6645 22.8419 28.0717 21.6933 31.3291 19.7744C34.5865 17.8557 36.7607 15.0872 36.7607 11.9083C36.7607 8.72945 34.5866 5.96363 31.3292 4.04504C28.0718 2.12626 23.6646 0.977539 18.8108 0.977539L18.8106 0.977633ZM18.8106 2.72954C23.3856 2.72954 27.5168 3.83298 30.4384 5.55385C33.3601 7.27482 35.0087 9.53326 35.0087 11.9082C35.0087 14.2837 33.3601 16.5448 30.4384 18.2658C27.5168 19.9868 23.3856 21.09 18.8106 21.09C14.2356 21.09 10.1042 19.9867 7.18247 18.2657C4.26094 16.5447 2.61516 14.2836 2.61516 11.9082C2.61516 9.53298 4.26094 7.27473 7.18266 5.55385C10.1042 3.83288 14.2353 2.72945 18.8103 2.72945L18.8106 2.72954ZM8.04966 7.43176V9.18376H16.7802V7.43166H8.04966V7.43176ZM18.5322 7.43176V9.18376H21.166V7.43166H18.5322V7.43176ZM22.9179 7.43176V9.18376H29.665V7.43166H22.9179V7.43176ZM8.04985 11.1729V12.9279H10.8302V11.1729H8.04966H8.04985ZM12.5822 11.1729V12.9279H18.7639V11.1729H12.5822ZM20.5187 11.1729V12.9279H24.0901V11.1729H20.5184H20.5187ZM25.842 11.1729V12.9279H29.6653V11.1729H25.8422H25.842ZM8.04985 14.6357V16.3879H14.6943V14.6357H8.04966H8.04985ZM16.4463 14.6357V16.3879H21.7929V14.6357H16.4463ZM23.545 14.6357L23.5449 16.3879H29.665V14.6357H23.545ZM32.2021 23.0966C25.1821 23.0966 19.4902 27.0118 19.4902 31.8419C19.4902 36.6719 25.1823 40.5869 32.2021 40.5869C33.9112 40.5869 35.5418 40.3544 37.0302 39.9337L43.4549 44.7295L41.1231 38.0705C43.4619 36.4844 44.914 34.28 44.914 31.8419C44.914 27.0121 39.2221 23.0969 32.2021 23.0969V23.0966ZM25.6074 27.0665H28.6924V28.8185H25.6072V27.0665H25.6074ZM30.4443 27.0665H38.914V28.8185H30.4443V27.0665ZM23.0409 30.9805H30.3828V32.7325H23.0409V30.9805H23.0409ZM32.1348 30.9805H34.1005V32.7325H32.1346L32.1348 30.9805ZM35.8525 30.9805H40.6338V32.7325H35.8525V30.9805ZM25.6075 34.6368H33.0194V36.3888H25.6074V34.6368H25.6075ZM34.7714 34.6368H38.914V36.3888H34.7714V34.6368Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Real-time Chat</p>
                            <p>
                                Get connected instantly with our Farmbot AI-driven 
                                chatbot and a community of like-minded farmers .
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="market-card offer-card">
                        <div className="card-icon">
                            <svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 0V15H45V5.13281L27 23.1328L18 14.1328L2.17969 29.9297L0.0703125 27.8203L18 9.86719L27 18.8672L42.8672 3H33V0H48Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Market Insights</p>
                            <p>
                                Navigate market fluctuations with confidence and 
                                ensure that you get the best value for your produce.
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="weather-card offer-card">
                        <div className="card-icon">
                            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.116 38.846C20.564 38.846 20.0927 38.6593 19.702 38.286C19.3113 37.9113 19.116 37.448 19.116 36.896C19.116 36.6493 19.1587 36.4073 19.244 36.17C19.3293 35.9327 19.4713 35.718 19.67 35.526L21.116 34.192L22.562 35.526C22.7593 35.7167 22.9007 35.9313 22.986 36.17C23.0713 36.4087 23.1147 36.6507 23.116 36.896C23.116 37.448 22.92 37.9107 22.528 38.284C22.1373 38.6587 21.6667 38.846 21.116 38.846ZM14.216 36.038L12.924 34.746L18.016 29.654L19.308 30.946L14.216 36.038ZM27.116 33.038L24.924 30.846L27.116 28.654L29.308 30.846L27.116 33.038ZM9.116 33.038L6.924 30.846L9.116 28.654L11.308 30.846L9.116 33.038ZM10 26C7.22267 26 4.862 25.0273 2.918 23.082C0.972667 21.138 0 18.7773 0 16C0 13.4133 0.872 11.176 2.616 9.288C4.35867 7.40267 6.542 6.31467 9.166 6.024C10.1553 4.14933 11.5107 2.676 13.232 1.604C14.9547 0.534667 16.8773 0 19 0C21.872 0 24.3393 0.952 26.402 2.856C28.4647 4.76 29.6647 7.13267 30.002 9.974C32.4567 10.122 34.4033 10.9753 35.842 12.534C37.2807 14.094 38 15.916 38 18C38 20.2173 37.2213 22.1053 35.664 23.664C34.1053 25.2213 32.2173 26 30 26H10Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Weather</p>
                            <p>
                                FarmBot hepls you to plan ahead with accurate 
                                weather forecasts and real-time alerts specific to your location.
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="knowledge-card offer-card">
                        <div className="card-icon">
                            <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 40H19C19 42.2 17.2 44 15 44C12.8 44 11 42.2 11 40ZM7 38H23V34H7V38ZM30 19C30 26.64 24.68 30.72 22.46 32H7.54C5.32 30.72 0 26.64 0 19C0 10.72 6.72 4 15 4C23.28 4 30 10.72 30 19ZM39.74 14.74L37 16L39.74 17.26L41 20L42.26 17.26L45 16L42.26 14.74L41 12L39.74 14.74ZM35 12L36.88 7.88L41 6L36.88 4.12L35 0L33.12 4.12L29 6L33.12 7.88L35 12Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Knowledge Updates</p>
                            <p>
                                FarmBot has a curated knowledge updates that keeps you 
                                informed about the rapidly evolving agricultural landscape.
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="decision-card offer-card">
                        <div className="card-icon">
                            <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8H12L20 0L28 8H22V16.86C20.5 17.78 19.16 18.92 18 20.24V8ZM40 20L32 12V18C28.5261 17.8571 25.1311 19.0607 22.5229 21.3597C19.9146 23.6586 18.2944 26.8757 18 30.34C16.5004 30.8724 15.273 31.9777 14.5869 33.4136C13.9009 34.8495 13.8121 36.4988 14.34 38C14.8724 39.4996 15.9777 40.727 17.4136 41.4131C18.8495 42.0991 20.4988 42.1879 22 41.66C23.4983 41.1258 24.7243 40.0203 25.4101 38.585C26.0959 37.1497 26.1857 35.5013 25.66 34C25.06 32.28 23.7 30.94 22 30.34C22.94 22.34 30.94 21.94 31.9 21.94V27.94L40 20ZM17.26 21.18C14.6063 19.132 11.3521 18.0144 8 18V12L0 20L8 28V22C10.68 22.06 13.26 23 15.28 24.8C15.78 23.52 16.44 22.3 17.26 21.18Z" fill="#2E7D32"/>
                            </svg>
                        </div>
                        <div className="card-note">
                            <p>Expert Decision Guide</p>
                            <p>
                                FarmBot helps our users  to navigate complex decisions 
                                with our AI-driven decision guide for personalized insights.
                            </p>
                            <div className="learn-more-link">
                                <Link to="/">
                                    Learn more
                                    <span>
                                        <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-header">
                <div className="about-flex">
                    <div className="about-img">
                        <img src={aboutUS} alt="aboutUs" />
                    </div>
                    <div className="about-note-header">
                        <div className="about-note">
                            <p>About Us</p>
                            <p>
                                Welcome to FarmBot where innovation meets 
                                agriculture! Founded with a passion for revolutionizing 
                                the farming landscape, our platform is driven by a 
                                diverse team of experts committed to empowering farmers 
                                worldwide.  FarmBot is not just a system; it's a revolution 
                                designed to redefine the way we farm. Here's a glimpse into 
                                who we are and the values that fuel our mission.
                            </p>
                        </div>
                        <div className="learn-more-btn">
                            <Link to="/">
                                <button type="button">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-header">
                <div className="all-blog">
                    <div className="blog-head">
                        <p>Blog</p>
                        <div className="blog-note-head">
                            <p>Nourishing Insights for Agriculture</p>
                            <Link>
                                see more
                                <span>
                                    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M20.91 19.9201L27.43 13.4001C28.2 12.6301 28.2 11.3701 27.43 10.6001L20.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M32.91 19.9201L39.43 13.4001C40.2 12.6301 40.2 11.3701 39.43 10.6001L32.91 4.08008" stroke="#2E7D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="blog-flex-header">
                        <div className="blog-flex">
                            <div className="unlock-card blog-card">
                                <div className="blog-img">
                                    <img src={unlock} alt="unlock" />
                                </div>
                                <div className="blog-description">
                                    <p>Unlocking Sustainable Farming Practices</p>
                                    <span className="date">
                                        October 26, 2023 | innovation
                                    </span>
                                    <p>
                                        Learn how cutting-edge innovations are promoting 
                                        environmental stewardship and increased crop yields...
                                    </p>
                                </div>
                            </div>
                            <div className="adapt-card blog-card">
                                <div className="blog-img">
                                    <img src={adapt} alt="unlock" />
                                </div>
                                <div className="blog-description">
                                    <p>Adapting to Climate Change: Resilience in Agriculture</p>
                                    <span className="date">
                                        October 26, 2023 | innovation
                                    </span>
                                    <p>
                                        Understand the challenges posed by climate 
                                        change and discover adaptive strategies for 
                                        building resilience in your.
                                    </p>
                                </div>
                            </div>
                            <div className="navigate-card blog-card">
                                <div className="blog-img">
                                    <img src={navigate} alt="unlock" />
                                </div>
                                <div className="blog-description">
                                    <p>Navigating Market Trends: A Farmer's Guide</p>
                                    <span className="date">
                                        October 26, 2023 | innovation
                                    </span>
                                    <p>
                                        Explore real-time market insights, 
                                        understand consumer behavior, and discover 
                                        strategies to maximize the val..
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="changer-header">
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-header">
                <div className="people-say-head">
                    <p>What People Say...</p>
                    <p>Testimonials from our satisfied clients.</p>
                </div>
                <div className="first-testimony-head testimony-head">
                    <div className="test-header">
                        <div className="test-head">
                            <div className="test-img">
                                <img src={dreamyoung} alt="dreamyoung" />
                            </div>
                            <div className="test-description">
                                <p>Emily Greene</p>
                                <p>
                                    "As a tech enthusiast and farmer, FarmBot <br />
                                    is a dream come true. The automation features <br />
                                    and AI-driven insights have taken the guesswork <br />
                                    out of farming for me."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-testimony-head testimony-head">
                    <div className="test-header">
                        <div className="test-head">
                            <div className="test-img">
                                <img src={grace} alt="grace" />
                            </div>
                            <div className="test-description">
                                <p>Grace Titilayo</p>
                                <p>
                                    "Being new to farming, FarmBot has been an <br />
                                    incredible learning companion. The user-friendly <br />
                                    interface and the supportive community have made <br />
                                    the entire experience enjoyable."
                                </p>
                            </div>
                        </div>
                        <div className="test-head">
                            <div className="test-img">
                                <img src={david} alt="david" />
                            </div>
                            <div className="test-description">
                                <p>David makinza</p>
                                <p>
                                    "Being new to farming, FarmBot has been an <br />
                                    incredible learning companion. The user-friendly <br />
                                    interface and the supportive community have made <br />
                                    the entire experience enjoyable."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last-testimony-head testimony-head">
                    <div className="test-header">
                        <div className="test-head">
                            <div className="test-img">
                                <img src={james} alt="james" />
                            </div>
                            <div className="test-description">
                                <p>James Nelson</p>
                                <p>
                                    "FarmBot is more than just a technological <br />
                                    marvel; it's a community. The shared knowledge, <br />
                                    the insights, and the collaborative spirit <br />
                                    make it a unique platform."
                                </p>
                            </div>
                        </div>
                        <div className="test-head">
                            <div className="test-img">
                                <img src={adebayo} alt="adebayo" />
                            </div>
                            <div className="test-description">
                                <p>Babafemi Adedayo</p>
                                <p>
                                    "As a tech enthusiast and farmer, FarmBot <br />
                                    is a dream come true. The automation features <br />
                                    and AI-driven insights have taken the <br />
                                    guesswork out of farming for me."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="test-changer-header">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="reach-out-head">
                    <p>Reach Out To FarmBot!</p>
                    <p>Have a specific question or need assistance?</p>
                    <div className="reach-contact-head">
                        <Link>
                            <button className="click-btn contact-us-btn">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer className="footer-body">
        <div className="footer-head">
            <div className="footer-header">
                <div className="logo-footer">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer-note">
                        <p>
                            FarmBot is a  platform dedicated to <br /> empower 
                            farmers worldwide by providing <br /> them with the 
                            tools and knowledge needed <br /> to make informed decisions.
                        </p>
                    </div>
                    <div className="follow-us-head">
                        <p>Follow us on</p>
                        <div className="follow-link">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <button type="button">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <button type="button">
                                            <i className="fa-brands fa-instagram"></i>
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <button type="button">
                                            <i className="fa-brands fa-twitter"></i>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="all-links-contact-header">
                    <div className="links-header all-links">
                        <p>Links</p>
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>What we do</Link>
                            </li>
                            <li>
                                <Link>About Us</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-header all-links">
                        <p>Contact Us</p>
                        <ul>
                            <li>
                                <Link to="tel:+1110002342">
                                    <span><i className="fa-solid fa-phone"></i></span> &nbsp;
                                    +111 000 2342
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:Info@farmbot.com">
                                    <span><i className="fa-solid fa-envelope"></i></span> &nbsp;
                                    Info@farmbot.com
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <span><i className="fa-solid fa-location-dot"></i></span> &nbsp;
                                    No.111 Suit Avenue Lagos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="help-header all-links">
                        <p>Links</p>
                        <ul>
                            <li>
                                <Link>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link>Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="subscribe-header">
                <form>
                    <div className="sub-header">
                        <div className="sub-head">
                            <p>Subscribe to get latest updates on our offers</p>
                        </div>
                        <div className="fill-form-head">
                            <input type="text" placeholder="Enter Email" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </footer>
  </div>
  )
}

export default Home