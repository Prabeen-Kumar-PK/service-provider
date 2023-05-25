import React from 'react'
import vg from '../assets/2.webp'
import { AiFillAmazonCircle, AiFillGoogleCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"


function Home() {
  return (
    <>
      <div className="home"  id='home'>
        <main>
          <h1>WorkTech</h1>
          <p>Solution to all your <span>Problems</span></p>
        </main>
      </div>

      <div className="home2 ">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase  the problem solving ability in children
          </p>
        </div>

      </div>


      <div className="home3 "  id='about'>
        <div>
          <h1>Who We Are ?</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, perspiciatis nobis hic eius distinctio culpa numquam et nostrum ipsa esse! Sit quibusdam explicabo soluta repellendus tenetur minus eos enim, quasi et excepturi? Nisi incidunt quisquam vitae obcaecati placeat, fugit eveniet consequuntur neque. Vel, mollitia error! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam fugit iure eum inventore aperiam veniam eveniet nemo perspiciatis autem error sunt eligendi ullam eos voluptate ratione provident, libero corrupti illo quas saepe, obcaecati harum.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perferendis ea harum temporibus numquam, distinctio tempore quaerat sapiente fuga exercitationem reprehenderit blanditiis quam unde corporis illum totam incidunt laudantium nobis, sunt quia nulla minus rem. Repellat itaque atque necessitatibus vel deserunt, consequatur tempora vero hic quaerat deleniti veniam eius, sit inventore possimus est quos cum reprehenderit fugiat? Accusamus autem odio adipisci dolor exercitationem, nulla, ab nam expedita atque, fugit repellendus.
          </p>
        </div>
      </div>

      <div className="home4 " id='brands'>
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay:"0.5s",

            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay:"1s",
              
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay:"1.5s",
              
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"2s",
              
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
