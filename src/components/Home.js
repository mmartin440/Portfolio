import img from '../images/spaceBunny.png'
const Home = () => {
  return (
    <div id='home' className="homeContainer">
      <div className='homeSubCont'>
        <div className="introContainer">
          <div className="introSubCont">
            <div className="intro-title">Welcome</div>
            <span className="intro-title">I'm</span>
            <span className="name">Martha Martin</span> 
            <div className="intro-descrip">A software engineer who is exited to show you what I got to offer to your comapny and be part of your team</div>
          </div>
        </div>
        <div className='containerSpaceBunn'>
          <img className='spaceBunn' alt="spaceBunn" src={img} height={700}/>
        </div>
      </div>
    </div>
  )
}

export default Home
