import React from 'react'
import './Rostery.css';
import all_rostery from '../components/All_Rostery_list';
import { Link } from 'react-router-dom';


export default function Rostery() {
  return (
    <>
      <wrap className='wrap'>
        <div className='outer_box'>
          <div className='nav_box'>
            <Link to='/'>홈</Link> {'>'} <Link to='/allRostery'>로스터리</Link>
          </div>
          <div className='text_box'>
            <h2>All Rostery</h2>
            <p className='text'>
              전국 방방 곳곳 커피맛집 로스터리의 원두를 우리집/우리매장에서!
              어디에 있는 맛집이든 편리하게 즐겨보세요! 
            </p>
            <p className='rostery_count'>/32곳의 로스터리</p>
          </div>
          <div className='Rostery_list_container'>
            {
              all_rostery.map((value, i) => {
                return (
                  
                    <Link to={value.link} className='rostery_box'>
                      <div className='img_box'>
                        <img src={`./imags/Rostary_logo/${value.logoImg}`} alt="로스터리 로고" />
                      </div>
                      <div className='text'>{value.cafeName}</div>
                    </Link>
                )
              })
            }
          </div>
        </div>{/* outer_box */}
      </wrap>



      {/* <Outlet></Outlet> */}
    </>
  )
}
