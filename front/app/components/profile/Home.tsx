"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import SearchPanel from './../SearchPanel';
import { setFreindRequestInfo, setFreindInfo } from '../../../redux/features/freinds/requestSlice';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { setAchievementInfo } from '../../../redux/features/achievement/achievementSlice';
import AchievementData from '../../achiev.json';
import FreindData from '../../freindslist.json';
import allFreinds from '../../freinddata.json';
import lastGameData from '../../lastGame.json';
import Profile from './Profile'
import Achievements from './achiemements/Achievements'
import Freinds from './friends/Freinds'
import axios from 'axios';
import LeftBar from '../leftBar';
import { selectProfileInfo } from '@/redux/features/profile/profileSlice';
import { setLastGameInfo } from '@/redux/features/lastGamesSlice/lastGameSlice';


// const login = async (username:string, password:string) => {


//   useEffect(() => {

//     axios.post('http://localhost:4000/auth/redirect')
//     .then(response => {
//       // Handle successful response
//       const data = response.data.token;
//       console.log(data);
//       return data;
//       // Process the data here
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('Error:', error);
//     });
//   }, [])
// };


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFreindRequestInfo(
      FreindData.data
    ));
    dispatch(setFreindInfo(
      allFreinds.data
    ));
    dispatch(setAchievementInfo(
      AchievementData.achievements
    ));
    dispatch(setLastGameInfo(
      lastGameData.last_games
    ));
  },
    []);

  return (
    <div className="h-[100vh] w-full flex flex-col">
        <div className='w-full h-[8%] flex flex-row justify-around items-center  '>
          <SearchPanel />
        </div>
      <div className="flex flex-col items-center lg:w-full gap-5 pt-20">


          <div className='flex xl:flex-row flex-col justify-center items-center w-[90%] gap-5 '>
            <div className="xl:w-[900px] w-[100%] h-full  ">
              <Profile />
            </div>
            <div className=" xl:w-[900px] w-[100%] h-full ">
              <Achievements />
            </div>
          </div>

          <div className="xl:w-[1000px] h-[440px] flex w-[90%]  justify-center">
              <Freinds />
        </div>
      </div>
    </div>
  );
};

export default Home;