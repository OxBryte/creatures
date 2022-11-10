import React from 'react'
import './home.css'
import banner from '../assets/banner_clean.png'
import image from '../assets/58.png'

function Home() {
  return (
    <div className='home'>
        <div className='container'>
           {/* <div className='banner'>
            <img src={banner} alt="" />
           </div> */}
           <div className='details'>
                <div className='section'>
                    <img src={image} width={500} alt="" />
                    <div className='section-1'>
                        <h1>Creatures NFT</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem debitis sed voluptatum, facere fugiat, in impedit praesentium unde sunt a accusamus sint consequuntur cupiditate quia! Vel officiis quisquam vero!</p>
                    </div>
                </div>
                <div className='details-text'>
                    {/* <h3>MINT INFO</h3> */}
                    <div className='details-text-1'>
                        <div className='details-text-1-1'>
                            <h3>Whitelisted</h3>
                            <div className='details-text-1-1-1'>
                                <h4>Minted</h4>
                                <p>400/3233</p>
                            </div>
                        </div>
                        <div className='details-text-1-1'>
                            <h3>Public Mint</h3>
                            <div className='details-text-1-1-1 two'>
                                <h4>Price</h4>
                                <p>4XCH</p>
                            </div>
                        </div>
                    </div>
                    <div className='details-text-1'>
                        <div className='details-text-1-1'>
                            <h3>Whitelisted</h3>
                            <div className='details-text-1-1-1'>
                                <h4>Minted</h4>
                                <p>400/3233</p>
                            </div>
                        </div>
                        <div className='details-text-1-1'>
                            <h3>Public Mint</h3>
                            <div className='details-text-1-1-1 two'>
                                <h4>Price</h4>
                                <p>4XCH</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Mint</button>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Home